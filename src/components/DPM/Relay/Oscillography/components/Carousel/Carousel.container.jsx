import React, { useEffect, useState } from "react";
import CarouselComponent from "./Carousel.component";
import * as behavior from "./carouselBehavior"
const Carousel = (props)=> {
  const [graphData, setGraphData] = useState(null)
  const [phasorGraphData, setPhasorGraphData] = useState(null)
  const [phasorGraphDataFiltered, setPhasorGraphDataFiltered] = useState([])

  useEffect(() => {
    behavior.getGraphDataHandler(props.relayID, props.oscillographyID, setGraphData, setPhasorGraphData)
  }, [])
    
  return (
    <CarouselComponent
    graphData={graphData}
    phasorGraphData={phasorGraphData}
    phasorGraphDataFiltered = {phasorGraphDataFiltered}
    setPhasorGraphDataFiltered= {setPhasorGraphDataFiltered}
    setHideDetails = {props.setHideDetails}
    />
  );
};

export default Carousel;
