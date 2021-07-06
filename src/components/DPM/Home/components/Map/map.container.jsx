import React from "react";
import MapComponent from "./map.component";

const Map = (props) => {
  return <MapComponent substations={props.substations} />;
};

export default Map;
