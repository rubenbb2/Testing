// MQTT publisher
var mqtt = require('mqtt')
var options = {
	// clientId uniquely identifies client
	// choose any string you wish
	clientId: 'testPub' 	
};
var client  = mqtt.connect('ws://localhost:9003', options);
var topic = 'LINTANGtest123'
var message = 'Hello World2!'




const esp1 = {
    ID : '8e8a223f4452',
    Sensors : [
        {
            id : '5q6s8a7a93',
            type : 1,
            temp : 30,
            hum : 50
        },
        {
            id : '78a9t6q32r',
            type : 2,
            temp : 28,
        }
    ]
}


const esp2 = {
    ID: '8h7q293f4459',
    Sensors : [
        {
            id : '8h6s8a7a93',
            type : 1,
            temp : randomNumber(60, 90),
            hum : randomNumber(60, 90)
        },
        {
            id : '69a9t6q32r',
            type: 2,
            temp : randomNumber(-3, 40),
        }
    ]
}



client.on('connect', ()=>{
    setInterval(()=>{

        client.publish(topic, JSON.stringify(esp2))
        console.log('Message sent!', esp2)

        //Asignamos nuevos valores
        esp2.Sensors[0].temp = randomNumber(0, 40)
        esp2.Sensors[1].temp = randomNumber(0, 40)
    }, 10000)
})

function randomNumber(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }