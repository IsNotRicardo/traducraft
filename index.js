require('dotenv').config();

const mineflayer = require('mineflayer');

const host = process.env.SERVER_HOST || 'localhost';
const port = parseInt(process.env.SERVER_PORT || '25565', 10);
const username = process.env.BOT_USERNAME || 'Traducraft';
const auth = process.env.SERVER_AUTH || 'online';
const version = process.env.SERVER_VERSION || '1.20.4';

const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
    auth: auth,
    version: version
})
