const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('echo message using options')
        .addStringOption(option => option.setName('input').setDescription('text to echo back').setRequired(true)),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('input'));
    },
};