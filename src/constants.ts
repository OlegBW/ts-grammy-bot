import dotenv from 'dotenv'

dotenv.config();

function getEnvVar(name: string): string {
    const value = process.env[name];

    if (value == undefined) {
        throw new Error("Missing required environment variable: ${name}");
    }

    return value;
}

export const BOT_TOKEN = getEnvVar("BOT_TOKEN");
// export const DATABASE_URL = getEnvVar("DATABASE_URL");