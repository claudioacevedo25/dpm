import React, { useEffect, useState } from "react";
import CurrentSelectorComponent from "./CurrentSelector.component";

const CurrentSelector = (props)=> {
  
  useEffect(() => {
    
  }, [])
    
  return (
     
    <CurrentSelectorComponent
      currentGraphData={props.currentGraphData}
      currentGraphDataFiltered={props.currentGraphDataFiltered}
      setCurrentGraphDataFiltered={props.setCurrentGraphDataFiltered}
      graphsData={props.graphsData}
      indexToShow={props.indexToShow}
    />
  );
};

export default CurrentSelector;
