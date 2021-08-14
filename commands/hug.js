const Math = require('mathjs');

module.exports = {
    name: 'hug',
    description: 'hug your friend',
    async execute(message, args, Discord){
      images = [
          "https://acegif.com/wp-content/gif/anime-hug-38.gif",
          "https://media3.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif",
          "https://i.pinimg.com/originals/79/c4/61/79c461726e53ee8f9a5a36521f69d737.gif",
          "https://i1.wp.com/gifimage.net/wp-content/uploads/2017/09/anime-sad-hug-gif-9.gif",
          "https://i.pinimg.com/originals/7d/b5/f1/7db5f172665f5a64c1a5ebe0fd4cfec8.gif",
          "https://i.gifer.com/HNdv.gif",
          "https://64.media.tumblr.com/422599bf14a1b29b160b1c488b05bd06/tumblr_pqzpcmYf1y1wj1nn0o1_540.gifv"
      ]

      personHugged = message.mentions.users.first();
     
        let hugEmbed = new Discord.MessageEmbed()
        .setTitle(`You hug ${personHugged.username} :heart:`)
        .setImage(images[Math.floor(Math.random()*images.length)])
        .setTimestamp()
      message.channel.send(hugEmbed);
      
    }
}