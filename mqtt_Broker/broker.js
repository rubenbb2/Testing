var mosca = require('mosca')
var settings = {port: 1234}
var broker = new mosca.Server({
	interfaces: [
        { type: "mqtt", port: 1234 },
        //{ type: "mqtts", port: 8883, credentials: { keyPath: SECURE_KEY, certPath: SECURE_CERT } },
        { type: "http", port: 9003, bundle: true },
        //{ type: "https", port: 3001, bundle: true, credentials: { keyPath: SECURE_KEY, certPath: SECURE_CERT } }
    ]
  });



// MongoDB
var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://test:test@localhost:27017/mqttJS'


broker.on('ready', ()=>{
    console.log('Broker is ready!')
})

broker.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

broker.on('published', (packet)=>{
	message = packet.payload.toString()
	console.log(message)
    
    /*if(message.slice(0,4) != 'mqtt' && message.slice(0,5) != '{"cli'){
        mongc.connect(url, function(err, db) {
			if (err) throw err;
			var dbo = db.db("mqttJS");

			dbo.collection("mqttJS").insertOne(JSON.parse(message), function(err, res) {
				if (err) throw err;
				console.log("1 document inserted");
				db.close();
			});
		});
    }*/
})