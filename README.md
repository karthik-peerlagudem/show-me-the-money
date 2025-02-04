# Show Me The Money - Xero Integration

A comprehensive full-stack application demonstrating Xero API integration with mock services.

## Architecture

```
┌─────────────┐     ┌──────────┐     ┌─────────────┐
│   Frontend  │────▶│ Backend  │────▶│  Xero Mock  │
│             │     │Port:3001 │     │  Port:3000  │
└─────────────┘     └──────────┘     └─────────────┘
```

## Prerequisites

-   Docker Desktop
-   Docker Compose
-   Git
-   Node.js 16+ (for local development)

## Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd show-me-the-money
```

### 2. Environment Setup

```bash
# Backend (.env)
PORT=3001
API_END_POINT=http://xero:3000/api.xro/2.0
```

### 3. Docker Setup

#### Using Docker Compose to run in the background

```bash
docker-compose up -d --build
```

## Service URLs

-   Xero Mock: http://localhost:3000
-   Backend API: http://localhost:3001
-   Frontend: http://localhost

### Common Issues

1. **Services Not Connecting**

    ```bash
    # Check container status
    docker-compose ps

    # View logs
    docker-compose logs -f
    ```

2. **Port Conflicts**

    ```bash
    # Check ports in use
    lsof -i :3000-3002
    ```

3. **Network Issues**

    ```bash
    # List networks
    docker network ls

    # Inspect network
    docker network inspect app-network
    ```

### Reset Environment

```bash
# Stop and remove containers
docker-compose down

# Remove volumes
docker-compose down -v

# Rebuild
docker-compose up --build
```

## Development Mode

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### Xero Mock

```bash
docker run -p 3000:3000 jaypeng2015/show-me-the-money
```
