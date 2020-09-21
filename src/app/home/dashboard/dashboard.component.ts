import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public total=[370];

  constructor() { }

  ngOnInit() {

    //Bar Chart
    var myChart = new Chart('mybar', {
      type: 'bar',
      label:[],
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          datasets: [{
            label:'CPM',
              data: [5,6,7,8,9,11,5,6],
              barThickness: 8,
              backgroundColor: 'rgba(197, 222, 240)'
          },{
            label:'CPC',
            data:[7,9,10,11,13,15,6,8],
            barThickness: 8,
            backgroundColor:'rgba(115, 189, 240)'
          }]
      },
      options: {
        maintainAspectRatio: true,
        responsive:true,
        legend: {
          position:'bottom'
      },
        title:{
          display:true,
          text:'Estimated Ad Savings',
          'position':'top'
        },
          scales: {      
            xAxes:[{
              gridLines:{
                display:false
              }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      stepSize:5
                  }
              }]
          }
      },
      
  });


  //Doughnut Chart
 
  var myChart= new Chart ('dough',{
    type:'doughnut',
    data:{
      labels:['Active Influencer','Inactive Influencer'],
      datasets:[{
        data:[260,110],
        backgroundColor:['rgba(115, 189, 240)','rgba(197, 222, 240)']
      }
   ]
    },
    options:{
      maintainAspectRatio: true,
      responsive:true,
      legend: {
        position:'bottom'
    },
    
      title:{
        display:true,
        text:'Influencer',
        'position':'top',
        'align':'start'
      },
      labels:{
        display:true,
        'align':'end'
      },
    },
    // elements:{
    //   center:{
    //     text:'350K',
    //     display:true,
    //   }
    // }
  })

  // Chart.pluginService.register({
  //   beforeDraw: function(chart) {
  //       var width = chart.chart.width,
  //           height = chart.chart.height,
  //           ctx = chart.chart.ctx;
      
  //       ctx.restore();
  //       var fontSize = (height / 114).toFixed(2);
  //       ctx.font = fontSize + "em sans-serif";
  //       ctx.textBaseline = "middle";
    
  //       var text = "350K",
  //           textX = Math.round((width - ctx.measureText(text).width) / 2),
  //           textY = height / 2;
    
  //       ctx.fillText(text, textX, textY);
  //       ctx.save();
  //     }
  //   });



    //Negative Charts
    var myChart= new Chart('columns',{
      type:'bar',
      data:{
        labels: ['Twitter','Fb', 'Insta','Linkedln','Native'],
        datasets:[
          {
            label:'Clicks',
            data:[-6,-10,-14,-6,-14],
            barThickness:12,
            backgroundColor:'rgba(197, 222, 240)'
          },{
          label:'Shares',
          data:[7,10,15,18,12],
          barThickness:12,
          backgroundColor:'rgba(115,189,240)'
        }]
      },
      options: {
        maintainAspectRatio: true,
        responsive:true,
        legend: {
          position:'bottom'
      },
        title:{
          display:true,
          text:['2907 Total Clicks','3067 Total Shares'],
          backgroundColor:'rgba(115,189,240)',
          'position':'bottom'
        },
          scales: {
            xAxes:[{
              gridLines:{
                display:false
              }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      stepSize:5
                  }
              }]
          }
      }
    })
    
  }

}
