const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { applicationID, guildID, token, global } = require('../config.json');

const commands = [];
const commandFiles = fs.readdirSync(__dirname + '/commands/').filter(file => file.endsWith('.js'));

commandFiles.forEach(command => {
	commands.push(require(`./commands/${command}`).data.toJSON());
});

const rest = new REST({ version: '9' }).setToken(token);

if (global) {
    rest.put(Routes.applicationCommands(applicationID), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
} else {
    rest.put(Routes.applicationGuildCommands(applicationID, guildID), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
}