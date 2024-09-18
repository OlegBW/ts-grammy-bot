# Telegram Bot Template with TypeScript, Grammy, and TypeORM

This is a template repository for building a Telegram bot using the `grammy` framework, written in TypeScript. It also includes database integration with `TypeORM` and SQLite, plus several development tools for ease of use and code formatting.

## Features

- Written in **TypeScript** for type safety and modern JavaScript features.
- Uses **grammy** for interacting with the Telegram Bot API.
- **SQLite** database integration via **TypeORM** for lightweight data persistence.
- **Prettier** for code formatting.
- Development support with **nodemon** for automatic restarts.
- Background process management with **PM2** for production deployment.
- Integrated with **i18n** for supporting multiple languages and localization in the bot.

## Prerequisites

- **Node.js** version 16 or higher.
- **npm** or **yarn** for managing dependencies.
- **PM2** for managing background processes.

You can install **PM2** globally using the following command:

```bash
npm install pm2 -g
```

## Scripts
- `npm run build`: Compiles the TypeScript files.
- `npm run start`: Starts the bot using Node.js (production mode).
- `npm run dev`: Starts the bot in development mode with nodemon for automatic restarts.
- `npm run format`: Formats the code using Prettier.
- `npm run prepare`: Prepares the project by building it before deployment.
- `npm run bg:start`: Builds the project and starts the bot in the background using PM2.
- `npm run bg:restart`: Restarts the background bot process.
- `npm run bg:logs`: Displays the bot logs from PM2.
