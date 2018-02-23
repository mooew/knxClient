export const graphData = {
    labels: [],
    datasets: [{
      label: "Temp",
      fill: false,
      backgroundColor: 'rgb(0, 180, 175)',
      borderColor: 'rgb(0, 180, 175)',
      //data: this.data
      data: [],    //here comes the data
      steppedLine: true,
      spanGaps: true,
      yAxisID: "y-axis-1",
    },{
      label: "SP",
      fill: false,
      backgroundColor: 'rgb(0, 178, 117)',
      borderColor: 'rgb(0, 178, 117)',
      //data: this.data
      data: [],    //here comes the data
      steppedLine: true,
      spanGaps: true,
      yAxisID: "y-axis-1",
    },{
      label: "PI heat",
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      //data: this.data
      data: [],    //here comes the data
      steppedLine: true,
      spanGaps: true,
      yAxisID: "y-axis-2",
    },{
      label: "PI cool",
      fill: false,
      backgroundColor: 'rgb(0, 177, 228)',
      borderColor: 'rgb(0, 177, 228)',
      //data: this.data
      data: [],    //here comes the data
      steppedLine: true,
      spanGaps: true,
      yAxisID: "y-axis-3",
    },

  ]

};

export const graphOptions = {
  responsive: false,
  display:true,
  scales: {
    xAxes: [{
      type: 'time',
      distribution: 'linear',
      time: {
        //unit: 'second'
      }
    }],
              yAxes: [{
                  //y-as 1
                  position: "left",
                  id: "y-axis-1",
                  scaleLabel: {
                    display: false,
                    labelString: 'value'
                  },
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 30
                }
              },{
                //y-as 2
                position: "right",
                id: "y-axis-2",
                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                    drawBorder: false,
                    display: false,
                },
                scaleLabel: {
                  display: false,
                  labelString: 'value'
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 800,
                  display: false,
              }

              },{
                //y-as 3
                position: "right",
                id: "y-axis-3",
                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                    drawBorder: false,
                    display: false,
                },
                scaleLabel: {
                  display: false,
                  labelString: 'value'
                },
                ticks: {
                  suggestedMin: -102,
                  suggestedMax: 698,
                  display: false,
              }

              },{
                //y-as 4
                position: "right",
                id: "y-axis-4",
                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                    drawBorder: false,
                    display: false,
                },
                scaleLabel: {
                  display: false,
                  labelString: 'value'
                },
                ticks: {
                  suggestedMin: -50,
                  suggestedMax: 250,
                  display: false,
              }

              }
            ]
  }
};
