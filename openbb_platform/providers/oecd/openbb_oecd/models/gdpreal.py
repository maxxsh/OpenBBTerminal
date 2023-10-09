"""OECD GDP Fetcher."""


from datetime import date
from typing import Any, Dict, List, Literal, Optional

from openbb_oecd.utils import constants, helpers
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.gdpreal import GDPRealData, GDPRealQueryParams
from pydantic import Field

rgdp_countries = tuple(constants.COUNTRY_TO_CODE_RGDP.keys())


class OECDGDPRealQueryParams(GDPRealQueryParams):
    """GDP query."""

    country: Literal[*rgdp_countries] = Field(
        description="Country to get GDP for.", default="united_states"
    )


class OECDGDPRealData(GDPRealData):
    """Nominal GDP data from OECD."""


class OECDGDPRealFetcher(Fetcher[OECDGDPRealQueryParams, List[OECDGDPRealData]]):
    """OECD Nominal GDP Fetcher."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> OECDGDPRealQueryParams:
        transformed_params = params.copy()
        if transformed_params["start_date"] is None:
            transformed_params["start_date"] = date(1950, 1, 1)
        if transformed_params["end_date"] is None:
            transformed_params["end_date"] = date(date.today().year, 12, 31)

        return OECDGDPRealQueryParams(**transformed_params)

    @staticmethod
    def extract_data(
        query: OECDGDPRealQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> dict:
        units = {"qoq": "PC_CHGPP", "yoy": "PC_CHGPY", "idx": "IDX"}[query.units]
        url = f"https://stats.oecd.org/sdmx-json/data/DP_LIVE/.QGDP.{'VOLIDX' if units == 'IDX' else 'TOT'}.{units}.Q/OECD?contentType=csv&detail=code&separator=comma&csv-lang=en&startPeriod={query.start_date}&endPeriod={query.end_date}"
        data_df = helpers.fetch_data(url, csv_kwargs={"encoding": "utf-8"}, **kwargs)
        # Sometimes there is weird unicode characters in the column names, so we need to rename them.
        # Even changing the encoding on the fetch doesn't seem to help.
        data_df = data_df.rename(
            columns={
                'ï»¿"LOCATION"': "country",
                "TIME": "date",
                "Value": "value",
                "Location": "country",
            }
        )
        data_df["country"] = data_df["country"].map(constants.CODE_TO_COUNTRY_RGDP)
        data_df = data_df[data_df["country"] == query.country]
        data_df = data_df[["country", "date", "value"]]
        return data_df.to_dict(orient="records")

    @staticmethod
    def transform_data(data: dict) -> List[OECDGDPRealData]:
        return [OECDGDPRealData.model_validate(d) for d in data]
