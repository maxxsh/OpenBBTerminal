"""OpenBB SDK."""
# flake8: noqa
# pylint: disable=import-outside-toplevel

from typing import List, Optional, Union

from openbb_core.app.static.app_factory import create_app as __create_app

try:
    # pylint: disable=import-outside-toplevel
    from openbb.package.__extensions__ import Extensions

    obb = sdk = __create_app(Extensions)
except (ImportError, ModuleNotFoundError):
    print(
        "Failed to import extensions." " Run `openbb.build()` to build extensions code."
    )
    obb = sdk = __create_app()


def build(
    modules: Optional[Union[str, List[str]]] = None,
    lint: bool = True,
) -> None:
    """Build extension modules.

    Parameters
    ----------
    modules : Optional[List[str]], optional
        The modules to rebuild, by default None
        For example: "/news" or ["/news", "/crypto"]
        If None, all modules are rebuilt.
    lint : bool, optional
        Whether to lint the code, by default True
    """
    import os
    from pathlib import Path
    from multiprocessing import Pool
    from openbb_core.app.static.package_builder import PackageBuilder

    current_dir = Path(os.path.dirname(os.path.realpath(__file__)))

    # `build` is run in a separate process to avoid consecutive runs in the same
    # interpreter to reuse methods already in memory. This was causing docstrings
    # to have repeated lines.
    with Pool(processes=1) as pool:
        pool.apply(
            PackageBuilder(current_dir).build,
            args=(modules, lint),
        )
