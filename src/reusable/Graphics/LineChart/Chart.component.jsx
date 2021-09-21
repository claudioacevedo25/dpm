import React from "react";
import Chart from "react-apexcharts";

const ChartComponent = ({type, xaxis, yaxis, id, chartColors, xaxis_name, yaxis_name, extended}) => {
    const isChartLine = type === 'line';
    const colorChart = !!isChartLine ? "#107558" : '#088069';
    const axisStyle = {
      colors: '#fff',
      fontSize: '12px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 400,
      cssClass: 'apexcharts-xaxis-label',
  };

    const chartState = {
      options: {
        chart: {
          zoom:{
            enabled:true,
            type:'x',
          },
          id: id,
          toolbar: {
              tools: {
                  download: false,
              },
          },
        },
        stroke: {
            curve: 'smooth',
            width: !isChartLine ? false : 2,
          },
        colors: !!chartColors ? chartColors : [colorChart] ,
        fill: {
            colors:[colorChart],
            type: !isChartLine ? 'gradient' : 'solid',
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: !isChartLine ? ["#2FDC80"] : undefined,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [10, 60, 100],
                colorStops: []
            }
          },  
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            tickPlacement: 'on',
            type: type==='bar' ? 'categoric' : 'numeric',
            tickAmount: 5,
            decimalsInFloat: 3,
            axisBorder: {
                show: true,
            },
            categories: xaxis, //[] Values of 'X'
            title: {
              text: xaxis_name,
              style: {
                color:'#fff',
              },
            },
            labels: {
                show: true,
                style: axisStyle,
                rotate: 0,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
          // max:0.0001,
           logarithmic: false,
           forceNiceScale: false,
            axisBorder: {
                show: true,
            },
            decimalsInFloat:5,
            tickAmount: 0,
            title:{
              text: yaxis_name,
              style: {
                color:'#fff',
              },
            },
            labels: {
                show: true,
                style: axisStyle,
                
            },
        },
        grid: {
            show: false,
          },
          tooltip: type==='bar' ?  ({
            custom: function({series, seriesIndex, dataPointIndex, w}) {
              return '<div style="padding: 5px; background-color: black;">' +
                '<b>' + series[seriesIndex][dataPointIndex] + '</b>' +
                '</div>'
            }
          }) : ({
            enabled: true,
            theme: 'dark',
        })
      
    },
      series: yaxis, // [{},n...{}]values of 'Y'
    };

    return (
      <div className="Chart__Container">
        <div className="Chart__Row">
          <div className="Mixed__Chart">
            <Chart
              options={chartState.options}
              series={chartState.series}
              type={type}
              width={extended ? "630" : "500"}
            />
          </div>
        </div>
      </div>
    );
}

export default ChartComponent;
