import React, { useEffect, useState } from "react";
import CurrentSelectorComponent from "./CurrentSelector.component";

const CurrentSelector = (props)=> {
  
  useEffect(() => {
    
  }, [])
    
  return (
     
    <CurrentSelectorComponent
      currentsData={props.currentsData}
      currentsDataFiltered={props.currentsDataFiltered}
      setCurrentsDataFiltered={props.setCurrentsDataFiltered}
    />
  );
};

export default CurrentSelector;
