module.exports = {
    name: 'ping',
    description: 'GIves you the bot ping',
    execute(message, args, Discord){
        message.channel.send('Finding Bot Ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            let pingEmbed = new Discord.MessageEmbed()
            .setTitle('Bot Speed')
            .setDescription(`Bot Speed/Ping = ${ping}ms`)
            .setColor('#0099ff')
            .setFooter('This maybe inaccurate depending on your wifi')
            .setThumbnail('https://ichef.bbci.co.uk/news/640/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg')
            message.channel.send(pingEmbed);
            
        })
    }
}