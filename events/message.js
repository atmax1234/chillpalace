module.exports = {
	name: 'message',
	execute(message) {
        if(message.content.includes("marioo") || message.content.includes("мариоо")){
            message.channel.send(`E pedal nali..Znam 😂`)
        }
    }
}