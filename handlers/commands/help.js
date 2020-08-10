const Discord = require('discord.js');
const {
    prefix
} = require('../bot/config.json');
const colors = require('../bot/colors.json');
module.exports = {
    name: 'help',
    guildOnly: true,
    description: 'help command!',
    execute(message, args) {

        let server = message.guild;
        const data = [];
        const {
            commands
        } = message.client;

        if (!args.length) {

        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`${server.name} Help`)
            .setColor(colors.mainColor)
            .setDescription(`My Commands\nDon\'t forget that the prefix is \'${prefix}\'`)
            .addField("Commands", commands.filter(e => !e.modOnly).map(command => command.name).join('\n'))

        data.push(embed);

        return message.author.send(data, {
                split: true
            })
            .then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('I\'ve sent you a DM with all my commands!');
            });

        /*
        if you don't want it to DM the member then change the return statement above to this:

        return message.channel.send(data, {
                split: true
            });
        */
    },
};