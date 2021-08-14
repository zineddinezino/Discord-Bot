const fetch = require('node-fetch')
module.exports = {
    name: 'gif',
    description: 'Gives you a gif',
    async execute(message, args, Discord){
        let tokens = message.content.split(" ");
        let keywords = 'error';
        let TENORKEY = 'IEY2ZVW2YQ9Z';
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${TENORKEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
    }
}