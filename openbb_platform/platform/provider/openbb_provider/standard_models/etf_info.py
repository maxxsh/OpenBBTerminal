"""ETF Info data model."""

from typing import List, Optional, Set, Union

from pydantic import Field, field_validator

from openbb_provider.abstract.data import Data
from openbb_provider.abstract.query_params import QueryParams


class EtfInfoQueryParams(QueryParams):
    """ETF Info Query Params."""

    symbol: str = Field(description="The exchange ticker symbol for the ETF.")

    @field_validator("symbol")
    @classmethod
    def upper_symbol(cls, v: Union[str, List[str], Set[str]]):
        """Convert symbol to uppercase."""
        if isinstance(v, str):
            return v.upper()
        return ",".join([symbol.upper() for symbol in list(v)])


class EtfInfoData(Data):
    """ETF Info Data."""

    symbol: str = Field(description="The exchange ticker symbol for the ETF.")
    inception_date: Optional[str] = Field(description="Inception date of the ETF.")
    name: Optional[str] = Field(description="Name of the ETF.")
