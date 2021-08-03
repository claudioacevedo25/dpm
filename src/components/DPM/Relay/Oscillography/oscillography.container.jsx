import React from "react";
import {
  getRelayOscillographies,
  downloadRelayOscillographies,
} from "../../../../api/relaysService";
import OscillographyComponent from "./oscillography.component";

const Oscillography = ({ relayID }) => {
  const getRelayIDOscillographies = async (page = 0, size) => {
    try {
      const data = await getRelayOscillographies(relayID, page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleOscillographiesRelay = async (listRelays) => {
    try {
      const data = await downloadRelayOscillographies(relayID, listRelays);
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
