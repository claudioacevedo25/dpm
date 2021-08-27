import React from "react";
import SubstationsComponent from "./substations.component";

const Substations = (props) => {
  return <SubstationsComponent substations={props.substations} handleTooltip={props.handleTooltip} />;
};

export default Substations;
