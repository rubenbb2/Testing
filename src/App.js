import React, { useState, useEffect  } from 'react';

import './App.css';
import DoughnutChart from './components/Chart';

var mqtt = require('mqtt')
var host = 'ws://localhost:9003'
var client = mqtt.connect(host)
var topic = 'LINTANGtest123'

function App() {
  const [response, setResponse] = useState([5,95])
  const [response2, setResponse2] = useState([10,90])

  const arrayTextFuncionModificaValorChart = useState([])
  const valorChart = arrayTextFuncionModificaValorChart[0]
  //console.log(valorChart)
  const funcionModificaValorChart = arrayTextFuncionModificaValorChart[1]
  

  useEffect(() => {
    funcionModificaValorChart([7,93])
    
   
    
   
  },[]);

  client.on('connect', function () {
    console.log('client connected:')
    client.subscribe(topic, { qos: 0 })
  })
 
  client.on('message', (topic, message, packet) => {
    var tempera = JSON.parse(message)
    
    
    //console.log(tempera.Sensors[0].temp, tempera.Sensors[1].temp)
    
    funcionModificaValorChart([tempera.Sensors[0].temp,100-tempera.Sensors[0].temp])
    
  }) 
  console.log('Testttt', valorChart)
  console.log('Segundo valor', valorChart)
 


    return (
      <div className="App">
          <DoughnutChart id="Tercer" temp={[valorChart[0],valorChart[1]]}/>
          
      </div>
    );
    
  }


export default App;
