const configs = require('../../bot/config.json');
const Discord = require('discord.js');

module.exports.run = (client) => {

    console.log(`${client.user.username}: ` +'now online | version: ' + configs.version);

let statuses = [
            `${configs.prefix}help`,
            'Over the Vibe Lounge'
        ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: 'WATCHING' });
    }, 6000)

}