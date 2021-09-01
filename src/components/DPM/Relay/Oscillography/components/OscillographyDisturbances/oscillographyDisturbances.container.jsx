import React, { useEffect } from "react";
import { getOscillography } from "../../../../../../api/oscillographiesService";
import OscillographyDisturbancesComponent from "./oscillographyDisturbances.component";

const OscillographyDisturbances = ({ relayID, oscillographyID }) => {
  const getRelayIDOscillography = async () => {
    const data = await getOscillography(relayID, oscillographyID);
    return data;
  };

  return (
    <OscillographyDisturbancesComponent
      getRelayIDOscillography={getRelayIDOscillography}
    />
  );
};

export default OscillographyDisturbances;
