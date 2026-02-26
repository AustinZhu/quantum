FROM python:3.14-slim AS runtime
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y --no-install-recommends build-essential curl && rm -rf /var/lib/apt/lists/*

COPY pyproject.toml uv.lock README.md ./
COPY src ./src
COPY main.py ./
COPY scripts ./scripts
COPY aerich.ini ./aerich.ini
COPY migrations ./migrations

RUN pip install --upgrade pip && pip install .

EXPOSE 8080
CMD ["algorand", "serve-api"]
