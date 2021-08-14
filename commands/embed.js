module.exports = {
    name: 'embed',
    description: 'example embed',
    execute(message, args, Discord){
      let embed = new Discord.MessageEmbed()
      .setTitle('Wonho')
      .setDescription('')
      .setColor('#0099ff')
      .setFooter('Dayak is our symbol of life')
      .setThumbnail('https://ichef.bbci.co.uk/news/640/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg')
      message.channel.send(embed);
    }
}