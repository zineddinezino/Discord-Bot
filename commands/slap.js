const Math = require('mathjs');
const fetch = require('node-fetch');

module.exports = {
    name: 'slap',
    description: 'slap your friend',
    async execute(message, args, Discord){
        
        EveryoneSlapimages = [
          "https://i.gifer.com/83iF.gif",
          "https://i.gifer.com/RK9x.gif",
          "https://i.gifer.com/n1.gif"
        ]

      personSlapped = message.mentions.users.first();
  
      let slapEmbed = new Discord.MessageEmbed()
        .setTitle(`You just slapped ${personSlapped.username}`)
        .setImage(EveryoneSlapimages[Math.floor(Math.random()*EveryoneSlapimages.length)])
        .setTimestamp()
        message.channel.send(slapEmbed);
      
    }
}