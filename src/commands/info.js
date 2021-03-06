const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with your info'),
    async execute(interaction) {
        await interaction.reply({ content: `Hello ${interaction.user.username} (${interaction.user.id})`, ephemeral: true });
    },
};