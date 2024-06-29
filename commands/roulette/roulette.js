// Ok so this code is written by Ghosty and its on spanish because this command is for a Spanish bot.
// If u want you can use this code, but you will need to translate this shit, ok bye, here is the code:
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ruleta') // The translated text of here (command name) is "roulette"
    .setDescription('Gira la ruleta'), // The translated text of here (command description) is "spin the roulette"
    async execute(interaction) {
        const awards = [
            '2 Robux',
            '1k XP', 
            'Nada', 
            'Nada', 
            'Nada', 
            'Nada', 
            '2 Robux', 
            '5 Robux',
            '1.5k XP',
            '1k XP',
            '1k XP',
            '2k XP'
        ];
        const randomIndex = Math.floor(Math.random() * awards.length);
        const randomAward = awards[randomIndex];

        await interaction.reply(`Girando la ruleta...`)

        setInterval( async () => {
            if (randomAward !=== "Nada"){
                await interaction.editReply(`Felicidades! Has ganado **${randomAward}**!\nPara reclamarlo, habla con algunn administrador.`)
            } else {
                await interaction.editReply('Vaya... Parece que no has ganado nada... Suerte para la proxima vez!')
            }
        }, 2000);
    }
}
