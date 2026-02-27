FROM gradle:9.3.1-jdk25 AS builder
WORKDIR /src
COPY . .
RUN gradle --no-daemon clean installDist

FROM eclipse-temurin:25-jre
WORKDIR /app
COPY --from=builder /src/build/install/doordash /app
EXPOSE 8082
CMD ["/app/bin/doordash"]
