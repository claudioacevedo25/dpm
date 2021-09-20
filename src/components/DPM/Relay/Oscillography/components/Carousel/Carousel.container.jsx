import { index } from "d3-array";
import React, { useEffect, useState } from "react";
import CarouselComponent from "./Carousel.component";
import * as behavior from "./carouselBehavior"
const Carousel = (props)=> {
  const [graphsData, setGraphsData] = useState(null)
  const [currentGraphData, setCurrentGraphData] = useState(null)
  const [currentGraphDataFiltered, setCurrentGraphDataFiltered] = useState([])
  const [indexToShow, setIndexToShow] = useState(0)

  useEffect(() => {
    behavior.getGraphDataHandler(props.relayID, props.oscillographyID, setGraphsData, setCurrentGraphData, setIndexToShow, neutralizeFilter, setCurrentGraphDataFiltered)
  }, [])

  const changeIndexToShow=(numToAdd) =>{
    setIndexToShow(numToAdd)
    setCurrentGraphData(graphsData[numToAdd])
    let emptyFilteredData = neutralizeFilter({...graphsData[numToAdd]})
    console.log(emptyFilteredData)
    setCurrentGraphDataFiltered(emptyFilteredData)
  }

  const neutralizeFilter = (graph)=>{
    const emptyFilteredData = {...graph}
    switch(graph.type){
      case 'phasor':
        emptyFilteredData.vars = []
      break
      case 'line':
        emptyFilteredData.yaxis = []
      break
      case 'bar':
        emptyFilteredData.yaxis = [graph.yaxis[2]]
        emptyFilteredData.xaxis = [graph.xaxis[2]]
        console.log(graph)
      break
    }
    
    return emptyFilteredData
  }
    
  return (
    <CarouselComponent
    graphsData={graphsData}
    currentGraphData={currentGraphData}
    currentGraphDataFiltered = {currentGraphDataFiltered}
    setCurrentGraphDataFiltered= {setCurrentGraphDataFiltered}
    indexToShow={indexToShow}
    setIndexToShow={changeIndexToShow}
    setHideDetails = {props.setHideDetails}
    hideDetails = {props.hideDetails}
    />
  );
};

export default Carousel;
