import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const ChartComponent = ({type, xaxis, yaxis, id}) => {

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
          id: "basic-bar",
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
        colors: [colorChart],
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
            type: 'number',
            tickAmount: 5,
            decimalsInFloat: 2,
            axisBorder: {
                show: !!isChartLine ? false : true,
            },
            categories: xaxis, //[] Values of 'X'
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
          max:0.0001,
          logarithmic: true,
          forceNiceScale: true,
            axisBorder: {
                show: !!isChartLine ? false : true,
            },
            // decimalsInFloat: 5,
            tickAmount: 4,
            labels: {
                show: true,
                style: axisStyle,
                
            },
        },
        grid: {
            show: false,
          },
          tooltip: {
            enabled: true,
            theme: 'dark',
        }
      
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
              width="500"
            />
          </div>
        </div>
      </div>
    );
}

export default ChartComponent;
