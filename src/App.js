import React, { useState, useEffect  } from 'react';

import './App.css';
import DoughnutChart from './components/Chart';

var mqtt = require('mqtt')
var host = 'ws://localhost:9003'
var client = mqtt.connect(host)
var topic = 'LINTANGtest123'

function App() {
  const [response, setResponse] = useState([5,95])
  //const [response2, setResponse2] = useState([10,90])


  useEffect(() => {

    client.on('connect', function () {
      console.log('client connected:')
      client.subscribe(topic, { qos: 0 })
    })
   
    client.on('message', (topic, message, packet) => {
      var tempera = JSON.parse(message)    
      //console.log(tempera.Sensors[0].temp, tempera.Sensors[1].temp)
      console.log('Testttt', response)
      setResponse([tempera.Sensors[0].temp,100-tempera.Sensors[0].temp])
      console.log('Segundo valor', response)
    }) 
    
   
  },[]);

  
    return (
      <div className="App">
          <DoughnutChart id="Tercer" temp={response}/>
          
      </div>
    );
    
  }


export default App;
