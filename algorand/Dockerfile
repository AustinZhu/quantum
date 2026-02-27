FROM python:3.14-slim AS runtime
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN set -eux; \
    if [ -f /etc/apt/sources.list ]; then \
      sed -i 's|http://deb.debian.org|https://deb.debian.org|g; s|http://security.debian.org|https://security.debian.org|g' /etc/apt/sources.list; \
    fi; \
    if [ -f /etc/apt/sources.list.d/debian.sources ]; then \
      sed -i 's|http://deb.debian.org|https://deb.debian.org|g; s|http://security.debian.org|https://security.debian.org|g' /etc/apt/sources.list.d/debian.sources; \
    fi; \
    apt-get -o Acquire::Retries=5 -o Acquire::http::Timeout=30 -o Acquire::https::Timeout=30 update; \
    apt-get install -y --no-install-recommends build-essential curl ca-certificates; \
    rm -rf /var/lib/apt/lists/*

COPY pyproject.toml uv.lock README.md ./
COPY src ./src
COPY main.py ./
COPY scripts ./scripts
COPY aerich.ini ./aerich.ini
COPY migrations ./migrations

RUN pip install --upgrade pip && pip install .

EXPOSE 8080
CMD ["algorand", "serve-api"]
