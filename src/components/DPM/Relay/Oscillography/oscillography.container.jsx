import React from "react";
import {
  downloadOscillographies,
  getOscillographies,
} from "../../../../api/oscillographiesService";
import OscillographyComponent from "./oscillography.component";

const Oscillography = ({ relayID }) => {
  return <OscillographyComponent relayID={relayID} />;
};

export default Oscillography;
