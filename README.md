# Info-Nitro

A full-stack monorepo application built with Next.js, NestJS, and PostgreSQL.

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | Next.js 14 (App Router)       |
| Backend     | NestJS 10                     |
| Database    | PostgreSQL 16                 |
| E2E Testing | Cypress 13                    |
| Monorepo    | Turborepo + Yarn workspaces   |
| Package Mgr | Yarn 4 (via Corepack)         |

## Project Structure

```text
info-nitro/
├── apps/
│   ├── frontend/          # Next.js app (port 3000)
│   └── backend/           # NestJS API (port 4000)
├── tests/
│   └── e2e/               # Cypress end-to-end tests
├── docker-compose.yml     # Local development stack
├── turbo.json             # Turborepo pipeline config
└── package.json           # Root workspace config
```

## Getting Started

### Prerequisites

- Node.js >= 23 (includes Corepack)
- Docker & Docker Compose

Enable Corepack once on your machine to activate Yarn 4:

```bash
corepack enable
```

### Install dependencies

```bash
yarn install
```

### Environment setup

Copy the example env files and fill in values:

```bash
cp apps/frontend/.env.example apps/frontend/.env.local
cp apps/backend/.env.example apps/backend/.env
```

### Run locally (with Docker)

Start PostgreSQL via Docker, then run all apps:

```bash
# Start PostgreSQL
docker-compose up postgres -d

# Start all apps in dev mode
yarn dev
```

Or run the full stack via Docker Compose:

```bash
docker-compose up
```

### Run individually

```bash
# Backend only
yarn workspace @info-nitro/backend dev

# Frontend only
yarn workspace @info-nitro/frontend dev
```

## Development URLs

| Service    | URL                              |
|------------|----------------------------------|
| Frontend   | `http://localhost:3000`          |
| Backend    | `http://localhost:4000`          |
| Swagger UI | `http://localhost:4000/api/docs` |
| PostgreSQL | `postgresql://localhost:5432`    |

## Testing

```bash
# Unit tests (all workspaces)
yarn test

# E2E tests (requires running apps)
yarn test:e2e

# Open Cypress interactively
yarn workspace @info-nitro/e2e test:e2e:open
```

## Build

```bash
yarn build
```
