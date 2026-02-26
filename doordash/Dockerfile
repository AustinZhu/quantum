FROM gradle:8.10.2-jdk21 AS builder
WORKDIR /src
COPY . .
RUN gradle --no-daemon clean shadowJar

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /src/build/libs/doordash-all.jar /app/doordash.jar
EXPOSE 8082
CMD ["java", "-jar", "/app/doordash.jar"]
