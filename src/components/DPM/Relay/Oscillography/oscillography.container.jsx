import React from "react";
import {
  downloadOscillographies,
  getOscillographies,
} from "../../../../api/oscillographiesService";
import OscillographyComponent from "./oscillography.component";

const Oscillography = ({ relayID }) => {
  const getRelayIDOscillographies = async (page = 0, size) => {
    try {
      const data = await getOscillographies(relayID, page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleOscillographiesRelay = async (listRelays) => {
    try {
      const data = await downloadOscillographies(relayID, listRelays);
      window.location.assign(data["url"]);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <OscillographyComponent
      getRelayIDOscillographies={getRelayIDOscillographies}
      handleOscillographiesRelay={handleOscillographiesRelay}
    />
  );
};

export default Oscillography;
