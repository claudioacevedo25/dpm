import React from "react";
import {
  downloadOscillographies,
  getOscillographies,
} from "../../../../api/oscillographiesService";
import OscillographyComponent from "./oscillography.component";

const Oscillography = ({ relayID }) => {
  const getRelayIDOscillographies = async (page = 0, size) => {
    const data = await getOscillographies(relayID, page, size);
    return data;
  };

  const handleOscillographiesRelay = async (listRelays) => {
    const data = await downloadOscillographies(relayID, listRelays);
    window.location.assign(data["url"]);
    return data;
  };

  return (
    <OscillographyComponent
      getRelayIDOscillographies={getRelayIDOscillographies}
      handleOscillographiesRelay={handleOscillographiesRelay}
    />
  );
};

export default Oscillography;
