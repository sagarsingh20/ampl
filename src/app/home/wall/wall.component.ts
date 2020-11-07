import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  constructor() { }

                                //*******FIRST GRAPH*********//
  public barChartOptions={
    responsive:true,
    scales:{
      xAxes: [{ gridLines:{ display:false }}],
      yAxes: [{ ticks: { beginAtZero: true, stepSize:5 }}]      
    }
  };
  public barChartLabels=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  public barChartType = 'bar';
  public barChartLegend=false
  public barChartData= [
    {data:[5,6,7,8,9,11,5,6],label:'CPM',barThickness: 8,backgroundColor:'rgba(197, 222, 240)'},
    {data:[7,9,10,11,13,15,6,8],label:'CPC',barThickness: 8,backgroundColor:'rgba(115, 189, 240)'}
  ];

                                     //*******END GRAPH*********//

                                    //*******NEXT GRAPH*********//
  public doughnutChartOptions={ responsive:true };
  public doughnutChartLabels=['Active Influencer','Inactive Influencer'];
  public doughnutChartData=[{data:[250,110],backgroundColor:['rgba(197, 222, 240)','rgba(115, 189, 240)']}]
  public doughnutChartType='doughnut';
  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] =[{
    beforeDraw(chart) {
      const ctx = chart.ctx;
      var txt1 = 'Total';
      var txt2 = 250+110;
      var txt=txt2.toString()+'K';
      
      //Get options from the center object in options
      const sidePadding = 50;
      const sidePaddingCalculated = (sidePadding / 100) * (chart['innerRadius'] * 2);
      
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
     
      
      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt1).width;
      const elementWidth = (chart['innerRadius'] * 2) - sidePaddingCalculated;
      
      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = (chart['innerRadius'] * 2);

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = 25;
      ctx.font = fontSizeToUse + 'px Arial';
      ctx.fillStyle = 'black';

      // Draw text in center
      ctx.fillText(txt, centerX, centerY - 10);
      var fontSizeToUse1 = 15;
      ctx.font = fontSizeToUse1 + 'px Arial';
      ctx.fillText(txt1, centerX, centerY + 10);
    }
  }]
                                    //*******END GRAPH*********//

  ngOnInit() {
    // var myChart = new Chart('mybar', {
    //     type: 'bar',
    //     label:[],
    //     data: {
    //         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    //         datasets: [{
    //           label:'CPM',
    //             data: [5,6,7,8,9,11,5,6],
    //             barThickness: 8,
    //             backgroundColor: 'rgba(197, 222, 240)'
    //         },{
    //           label:'CPC',
    //           data:[7,9,10,11,13,15,6,8],
    //           barThickness: 8,
    //           backgroundColor:'rgba(115, 189, 240)'
    //         }]
    //     },
    //     options: {
    //       maintainAspectRatio: true,
    //       responsive:true,
    //       legend: {
    //         position:'bottom'
    //     },
    //       title:{
    //         display:true,
    //         text:'Estimated Ad Savings',
    //         'position':'top'
    //       },
    //         scales: {      
    //           xAxes:[{
    //             gridLines:{
    //               display:false
    //             }
    //           }],
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true,
    //                     stepSize:5
    //                 }
    //             }]
    //         }
    //     },
        
    // });

    // //2nd One
    // var sum=0;
    // var textInside=sum.toString();
    // var myChart= new Chart ('dough',{
    //   type:'doughnut',
    //   data:{
    //     labels:['Active Influencer','Inactive Influencer'],
    //     datasets:[{
    //       data:[250,100],
    //       backgroundColor:['rgba(115, 189, 240)','rgba(197, 222, 240)']
    //     }
    // ]
    //   },
    //   options:{
    //     maintainAspectRatio: true,
    //     responsive:true,
    //     legend: {
    //       position:'bottom'
    //     },
      
    //     title:{
    //       display:true,
    //       text:'Influencer',
    //       'position':'top',
    //       'align':'start'
    //     },
    //     labels:{
    //       display:true,
    //       'align':'end'
    //     },
    //   },
    //   elements:{
    //     center:{
    //       text: textInside
    //     }
    //   }
    // })

  }

}

