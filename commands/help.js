module.exports = {
    name: "help",
    aliases: ['h'],
    execute(message, args) {
        message.channel.send({
            embed: {
                color: 3447003,
                title: "General:",
                fields: [{
                    name: "Command",
                    value: "avatar\nhelp\nping\nversion\ncredits",
                    inline: true
                },
                {
                    name: "Action",
                    value: "Gets the mentioned user's avatar\nShows the commands\nPings the bot's latency\nStates the version number\nA command dedicated to my friends \o/",
                    inline: true
                }
                ]
            },
        });
        message.channel.send({
            embed: {
                color: 3447003,
                title: "Fun:",
                fields: [{
                    name: "Command",
                    value: "topic\njoke\ninfo\nuselessfact\ncoinflip\ncat\ndog\nrps\npogchamp",
                    inline: true
                },
                {
                    name: "Action",
                    value: "ends an open ended question to start chat\nSends a joke\nAsomataru introduces themself!\nSends a useless fact.\nFlips a coin!\nSends a cat pic!\n Sends a doggo picture!\n Play rock paper scissors against Asomataru!\n Shows pogchamp",
                    inline: true
                }
                ]
            }
        })
        message.channel.send({
            embed: {
                color: 3447003,
                title: "Admin:",
                fields: [{
                    name: "Command",
                    value: "userinfo\nserverinfo\nkick\nban",
                    inline: true
                },
                {
                    name: "Action:",
                    value: "Gets the mentioned user's account info\nGets the server info\nKicks the mentioned user from the server\nBans the mentioned user from the server",
                    inline: true
                }
                ]
            }
        });
    }

}