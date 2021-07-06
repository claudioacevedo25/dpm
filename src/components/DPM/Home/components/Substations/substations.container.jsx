import React from "react";
import SubstationsComponent from "./substations.component";

const Substations = (props) => {
  return <SubstationsComponent substations={props.substations} />;
};

export default Substations;
