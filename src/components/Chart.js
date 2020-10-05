import React, {Component} from 'react';
import {Chart, Doughnut} from 'react-chartjs-2';



class DoughnutChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: ''
    }
  }

  static defaultProps = {
    displayTitle:true
  }

  

  render(){
    return (
      <div className="chart">
        <Doughnut
        
          data={{
            datasets:[
              {
                data:this.props.temp,
                backgroundColor:['rgba(54, 162, 235, 0.6)','rgba(193, 193, 193, 0.6)'],
                borderWidth :0
              }
            ]
          }}
          id={this.props.id}
          options={{
            centertext: this.props.temp[0],
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            tooltips: {
              enabled: false
            }
          }}
        />

      </div>
      
    )
  }
}

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 100).toFixed(2);
    ctx.font = "bold "+fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.options.centertext,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 1.15;

    ctx.fillText(text, textX, textY);
  }
});


export default DoughnutChart;
