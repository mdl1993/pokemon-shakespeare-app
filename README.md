# Pokémon Shakespeare App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Overview

The Pokémon Shakespeare App is a web application that bridges the world of Pokémon with the classical literary style of William Shakespeare. Users can search for their favorite Pokémon and receive its official description rephrased in Shakespearean English. The project uses external APIs to fetch Pokémon data and perform the translation.

## Features

- Pokémon Search: Find any Pokémon by name using a search interface.
- Shakespearean Descriptions: Get official Pokémon descriptions translated into Shakespearean English.
- Pokémon Details Display: View information for each Pokémon.
- Fast & Responsive UI: Built with Next.js and React.
- Modern Styling: Responsive design powered by Tailwind CSS.

## Tech Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS
- PostCSS

Backend:
- Next.js API Routes for server-side logic and API proxying

DevOps:
- Deployment with Vercel
- ESLint
- pnpm

## Quick Start

Follow these steps to run the application locally.

### Prerequisites
- Node.js (LTS version recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mdl1993/pokemon-shakespeare-app.git
   cd pokemon-shakespeare-app

2. Install dependencies
    pnpm install

3. Environment setup 

Create a .env.local file in the project root and configure environment variables:

NEXT_PUBLIC_POKEMON_API_BASE_URL=https://pokeapi.co/api/v2/
SHAKESPEARE_TRANSLATION_API_KEY=your_shakespeare_api_key_here
SHAKESPEARE_TRANSLATION_API_BASE_URL=https://api.funtranslations.com/

4. Start development server
pnpm run dev

5. Open your browser at http://localhost:3000.

## Project Structure

pokemon-shakespeare-app/
├── app/                  # Next.js App Router root
│   ├── api/              # API routes
│   └── (pages)/          # Pages and layouts
├── public/               # Static assets
├── .gitignore
├── LICENSE
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json

## Configuration
Environment variables are loaded from .env.local.

NEXT_PUBLIC_POKEMON_API_BASE_URL: Base URL for the Pokémon API (default: https://pokeapi.co/api/v2/)

SHAKESPEARE_TRANSLATION_API_KEY: API key for the Shakespearean translation service

SHAKESPEARE_TRANSLATION_API_BASE_URL: Base URL for the translation API (default: https://api.funtranslations.com/)

## Development
Available scripts:

pnpm run dev: Starts the development server

pnpm run build: Creates a production build

pnpm run start: Starts the production server

pnpm run lint: Runs ESLint

## Testing
This project uses ESLint for code quality checks.

Run linting:

bash
pnpm run lint

## Deployment
The application is configured for deployment to Vercel.

Production build:

bash
pnpm run build
Deployment options:

Vercel: Link your GitHub repository to a new Vercel project. Vercel will detect Next.js and deploy automatically.

Other hosting: Deploy the build output to any Node.js compatible hosting service.

