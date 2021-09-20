import { getGraphicsOscillography } from "../../../../../../api/oscillographiesService"


export const buildGraphDataArray = async (graphData, setGraphsData, currentGraphDataSetter, setIndexToShow, neutralizeFilter, setCurrentGraphDataFiltered) => {
    const graphDataObject = await graphData
    let graphsCollection = []
    for (const graph in graphDataObject.graphs) {
        switch (graphDataObject.graphs[graph].type) {
            case 'bar':
                const barChartXAxisArray = []
                const barChartYAxisArray = []
                for (const dvar in graphDataObject.graphs[graph]['used_vars']) {
                    barChartXAxisArray.push(
                         graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id].x,
                        )
                    barChartYAxisArray.push(
                        {
                        data: graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id].y,
                        name: graphDataObject.graphs[graph]['used_vars'][dvar].name,
                        color: getRandomColor()
                        }
                        )
                }
                graphsCollection.push({ 
                    type: 'bar', 
                    xaxis: barChartXAxisArray, 
                    yaxis: barChartYAxisArray, 
                    yaxis_name: graphDataObject.graphs[graph]['y_axis_name'], 
                    xaxis_name:graphDataObject.graphs[graph]['x_axis_name']})
                break
            case 'line':
                const lineChartYAxisArray = []
                for (const dvar in graphDataObject.graphs[graph]['used_vars']) {
                    lineChartYAxisArray.push(
                        {
                         data: graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id],
                         name: graphDataObject.graphs[graph]['used_vars'][dvar].name,
                         color: getRandomColor()
                        }
                        )
                }
                graphsCollection.push({ 
                    type: 'line', 
                    yaxis: lineChartYAxisArray, 
                    xaxis: graphDataObject.vars[graphDataObject.graphs[graph]['x_axis'].id], 
                    yaxis_name: graphDataObject.graphs[graph]['y_axis_name'], 
                    xaxis_name:graphDataObject.graphs[graph]['x_axis_name']})
                break
            case 'phasor':
                let arrayOfVarsToAdd = []
                for (const dvar in graphDataObject.graphs[graph]['used_vars']) {
                    let varToAdd = {
                        id: graphDataObject.graphs[graph]['used_vars'][dvar].name,
                        amp: graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id].amplitude,
                        angle: graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id].phase,
                        color: getRandomColor()
                    }
                    arrayOfVarsToAdd.push(varToAdd)
                }
                graphsCollection.push({ 
                    type: graphDataObject.graphs[graph].type, 
                    vars: arrayOfVarsToAdd })
                break
            default:
                console.log(graphDataObject.graphs[graph].type + ' not implemented')
        }

    }
    console.log(graphsCollection)
    setCurrentGraphDataFiltered(neutralizeFilter({...graphsCollection[0]}))
    setGraphsData(graphsCollection)
    currentGraphDataSetter(graphsCollection[0])
    setIndexToShow(0)
}

function getRandomColor() {
    var num=(Math.floor(Math.random()*4)*4).toString(16);
    var letters = ['0','F',num];
    var color = '#';
    
    for (var i = 0; i < 3; i++ ) {
        let pos=Math.floor(Math.random() * letters.length);
        color += letters[pos];
        letters.splice(pos,1);
    }
    return color
}
export const getGraphDataHandler = async (relayID, oscillographyID, graphDataSetter, currentGraphDataSetter, setIndexToShow, neutralizeFilter, setCurrentGraphDataFiltered) => {
    try {
        const recievedGraphData = await getGraphicsOscillography(relayID, oscillographyID)
        buildGraphDataArray(recievedGraphData, graphDataSetter, currentGraphDataSetter, setIndexToShow, neutralizeFilter, setCurrentGraphDataFiltered)
    } catch (error) {
        console.log(error)
    }
}
