// experimental
module.exports = {
    name:'cat2',
    description:'Shows a cat! UwU',
    aliases: ['meow'],
    execute: async (message) => {
    const subReddits = ["cat", "cats"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = Discord.MessageEmbed()
    .setImage (img)
    .setTitle (`From r/${random}`)
    .setURL (`http://reddit.com/${random}`)

    message.channel.send(embed);
    },
};