# pylint: disable=W0613:unused-argument
"""SEC Router."""

from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router
from pydantic import BaseModel

router = Router(prefix="/sec")


@router.command(model="Filings")
def filings(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Look up filings to the SEC by ticker symbol or CIK."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="CikMap")
def cik_map(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Get the CIK number corresponding to a ticker symbol."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="InstitutionsSearch")
def institutions_search(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Look up institutions regulated by the SEC."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="SchemaFiles")
def schema_files(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """Get lists of SEC XML schema files by year."""
    return OBBject(results=Query(**locals()).execute())


@router.command(model="SymbolMap")
def symbol_map(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject[BaseModel]:
    """
    Get the ticker symbol corresponding to a company's CIK. Enter the CIK as a string, e.g. '0001067983'.
    This function is not intended for funds.
    """
    return OBBject(results=Query(**locals()).execute())


# @router.command(model="NPort")
# def peers(
#    cc: CommandContext,
#    provider_choices: ProviderChoices,
#    standard_params: StandardParams,
#    extra_params: ExtraParams,
# ) -> OBBject[BaseModel]:
#    """NPORT-P Filings from funds reporting to the SEC.."""
#    return OBBject(results=Query(**locals()).execute())
