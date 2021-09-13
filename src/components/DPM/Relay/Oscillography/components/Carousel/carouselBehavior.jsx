import { getGraphicsOscillography } from "../../../../../../api/oscillographiesService"


export const buildGraphDataArray = async (graphData, phasorGraphDataSetter) => {
    const graphDataObject = await graphData
    for (const graph in graphDataObject.graphs) {
        switch (graphDataObject.graphs[graph].type) {
            case 'phasor':
                let arrayOfVarsToAdd = []
                    for (const dvar in graphDataObject.graphs[graph]['used_vars']) {
                    let varToAdd = {
                        id: graphDataObject.graphs[graph]['used_vars'][dvar].name,
                        amp: graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id].amplitude,
                        angle: graphDataObject.vars[graphDataObject.graphs[graph]['used_vars'][dvar].id].phase,
                        color: 'red'
                    }
                    arrayOfVarsToAdd.push(varToAdd)
                }
                phasorGraphDataSetter({ type: graphDataObject.graphs[graph].type, vars: arrayOfVarsToAdd })
                break
            default:
                console.log(graphDataObject.graphs[graph].type + ' not implemented')
        }

    }
}

export const getGraphDataHandler = async (relayID, oscillographyID, graphDataSetter, phasorGraphDataSetter) => {
    try {
        const recievedGraphData = await getGraphicsOscillography(relayID, oscillographyID)
        graphDataSetter(recievedGraphData)
        buildGraphDataArray(recievedGraphData, phasorGraphDataSetter)
    } catch (error) {
        console.log(error)
    }
}
