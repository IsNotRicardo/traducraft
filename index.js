require('dotenv').config();

const mineflayer = require('mineflayer');

const host = (() => {
    if (process.env.SERVER_HOST) {
        return process.env.SERVER_HOST;
    }
    console.error("🛑 Missing server host environment variable. Terminating.");
    process.exit(1);
})();

const port = (() => {
    if (process.env.SERVER_PORT) {
        const parsedPort = parseInt(process.env.SERVER_PORT, 10);

        if (!isNaN(parsedPort) && parsedPort > 0) {
            return parsedPort;
        }
    }
    console.warn("⚠️ Missing or invalid server port environment variable. Defaulting to '25565'.")
    return 25565
})();

const username = (() => {
    if (process.env.BOT_USERNAME) {
        return process.env.BOT_USERNAME;
    }
    console.warn("⚠️ Missing bot username environment variable. Defaulting to 'Traducraft'")
    return 'Traducraft'
})();

const auth = (() => {
    if (process.env.SERVER_AUTH) {
        return process.env.SERVER_AUTH;
    }
    console.warn("⚠️ Missing server auth environment variable. Defaulting to 'online'")
    return 'online'
})();

const version = (() => {
    if (process.env.SERVER_VERSION) {
        return process.env.SERVER_VERSION;
    }
    console.error("🛑 Missing server version environment variable. Terminating.");
    process.exit(1);
})();

const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
    auth: auth,
    version: version
})
