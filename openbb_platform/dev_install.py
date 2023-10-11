# noqa: S603,PLW1510,T201
import subprocess
import sys
from pathlib import Path

import toml

PLATFORM_PATH = Path(__file__).parent.resolve()
LOCK = PLATFORM_PATH / "poetry.lock"
PYPROJECT = PLATFORM_PATH / "pyproject.toml"


LOCAL_DEPS = """
[tool.poetry.dependencies]
python = ">=3.8,<3.12"
openbb-provider = { path = "./platform/provider", develop = true }
openbb-core = { path = "./platform/core", develop = true }

openbb-benzinga = { path = "./providers/benzinga", develop = true }
openbb-fmp = { path = "./providers/fmp", develop = true }
openbb-fred = { path = "./providers/fred", develop = true }
openbb-intrinio = { path = "./providers/intrinio", develop = true }
openbb-polygon = { path = "./providers/polygon", develop = true }



openbb-crypto = { path = "./extensions/crypto", develop = true }
openbb-economy = { path = "./extensions/economy", develop = true }
openbb-etf = { path = "./extensions/etf", develop = true }
openbb-forex = { path = "./extensions/forex", develop = true }
openbb-fixedincome = { path = "./extensions/fixedincome", develop = true }
openbb-news = { path = "./extensions/news", develop = true }
openbb-stocks = { path = "./extensions/stocks", develop = true }

# Community dependencies
openbb-alpha-vantage = { path = "./providers/alpha_vantage", optional = true, develop = true }
openbb-blackrock = { path = "./providers/blackrock", optional = true, develop = true }
openbb-bmo = { path = "./providers/bmo", optional = true, develop = true }
openbb-cboe = { path = "./providers/cboe", optional = true, develop = true }
openbb-invesco = { path = "./providers/invesco", optional = true, develop = true }
openbb-quandl = { path = "./providers/quandl", optional = true, develop = true }
openbb-tmx = { path = "./providers/tmx", optional = true, develop = true }
openbb-yfinance = { path = "./providers/yfinance", optional = true, develop = true }
openbb-oecd= { path = "./providers/oecd", optional = true, develop = true }

openbb-charting = { path = "./extensions/charting", optional = true, develop = true }
openbb-futures = { path = "./extensions/futures", optional = true, develop = true }
openbb-qa = { path = "./extensions/qa", optional = true, develop = true }
openbb-ta = { path = "./extensions/ta", optional = true, develop = true }
openbb-econometrics = { path = "./extensions/econometrics", optional = true, develop = true }
"""

pyproject_toml = toml.load(PYPROJECT)
pyproject_toml["tool"]["poetry"]["dependencies"] = toml.loads(LOCAL_DEPS)["tool"][
    "poetry"
]["dependencies"]

TEMP_PYPROJECT = toml.dumps(pyproject_toml)


def install_local(extras: bool = False):
    """Install the Platform locally for development purposes.

    Installs the Platform in editable mode, instead of copying the source code to
    the site-packages directory. This makes any changes immediately available
    to the interpreter.

    Parameters
    ----------
    extras : bool, optional
        Whether to install the Platform with the extra dependencies, by default False
    """
    orginal_lock = LOCK.read_text()
    orginal_pyproject = PYPROJECT.read_text()
    extras_args = ["-E", "all"] if extras else []

    try:
        # we create a temporary pyproject.toml
        PYPROJECT.write_text(TEMP_PYPROJECT)
        CMD = [sys.executable, "-m", "poetry"]

        subprocess.run(  # noqa: PLW1510
            CMD + ["lock", "--no-update"], cwd=PLATFORM_PATH  # noqa: S603
        )
        subprocess.run(  # noqa: PLW1510
            CMD + ["install"] + extras_args, cwd=PLATFORM_PATH  # noqa: S603
        )

    except (Exception, KeyboardInterrupt) as e:
        print(e)  # noqa: T201
        print("Restoring pyproject.toml and poetry.lock")  # noqa: T201

    # we restore the original pyproject.toml
    with open(PYPROJECT, "w", encoding="utf-8", newline="\n") as f:
        f.write(orginal_pyproject)

    # we restore the original poetry.lock
    with open(LOCK, "w", encoding="utf-8", newline="\n") as f:
        f.write(orginal_lock)


if __name__ == "__main__":
    args = sys.argv[1:]
    extras = any([arg.lower() in ["-e", "--extras"] for arg in args])
    install_local(extras)
