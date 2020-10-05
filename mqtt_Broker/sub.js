var mqtt = require('mqtt')
var options = {
	protocol: 'mqtt',
	// clientId uniquely identifies client
	// choose any string you wish
	clientId: 'testNode' 	
};
var client = mqtt.connect('mqtt://localhost:1234', options)

var topic = 'LINTANGtest123'

/*client.on('message', (topic, message)=>{
	message = message.toString()
	console.log(message)
})*/

client.on('connect', ()=>{
	client.subscribe(topic)
})