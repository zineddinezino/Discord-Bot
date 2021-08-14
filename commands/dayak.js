const Math = require('mathjs');
const fetch = require('node-fetch');

module.exports = {
    name: 'punch',
    description: 'punch your friend',
    async execute(message, args, Discord){
      
      EveryoneDayakimages = [
        "https://media1.tenor.com/images/c7af3659bd8f9c84d408878148ff5f8d/tenor.gif",
        "https://media2.giphy.com/media/3o6Zt2wf1yKWucbkqY/giphy.gif",
        "https://media2.giphy.com/media/7Nsu3HCWLRVgQ/giphy.gif"
      ]
      

      personDayaked = message.mentions.users.first();
    
      let dayakEmbed = new Discord.MessageEmbed()
        .setTitle(`You just punched ${personDayaked.username}`)
        .setImage(EveryoneDayakimages[Math.floor(Math.random()*EveryoneDayakimages.length)])
        .setTimestamp()
        message.channel.send(dayakEmbed);
      
    }
}