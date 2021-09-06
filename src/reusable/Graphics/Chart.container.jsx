import ChartComponent from './chart.component';

const Chart = ({ type, data, id }) => <ChartComponent type={type} axisData={data} id={id}/>;

export default Chart;