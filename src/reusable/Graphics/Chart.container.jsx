import ChartComponent from './Chart.component';

const Chart = ({ type, xaxis, yaxis, id, colors }) => 
<ChartComponent 
    type={type} 
    xaxis={xaxis} 
    yaxis={yaxis} 
    id={id}
    colors={colors}
    />;

export default Chart;