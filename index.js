const tmi = require('tmi.js');

const BOT_USERNAME = ''; 
const CHANNEL_NAME = '';
const OAUTH_TOKEN = ''; 

const options = {
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
        username: BOT_USERNAME,
        password: OAUTH_TOKEN
    },
    channels: [CHANNEL_NAME]
};

const client = new tmi.Client(options);

client.on('connected', (address, port) => {
    console.log(`Connecté à ${address}:${port}`);
    client.say(CHANNEL_NAME, "Salut tout le monde ! Le bot est en ligne. 🎉");
});

client.on('message', (channel, tags, message, self) => {
    if (self) return; 

    const command = message.toLowerCase();

    if (command === '!hello') {
        client.say(channel, `Salut @${tags.username} ! 👋`);
    }

    if (command === '!discord') {
        client.say(channel, 'Rejoignez notre serveur Discord ici : https://discord.gg/ton-invitation');
    }
});

client.connect().catch(console.error);
