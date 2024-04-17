
# Construye la imagen y levanta el servicio usando Docker Compose
```bash
docker-compose up --build -d

```bash
docker build -t digital-experts-web:latest .
docker run -d -p 8081:80 digital-experts-web:latest
