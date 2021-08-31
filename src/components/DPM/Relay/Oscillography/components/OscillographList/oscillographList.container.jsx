import React from "react";
import {
  downloadOscillographies,
  getOscillographies,
} from "../../../../../../api/oscillographiesService";
import OscillographListComponent from "./oscillographList.component";

const OscillographList = ({ relayID, onClickOscillography }) => {
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
    <OscillographListComponent
      getRelayIDOscillographies={getRelayIDOscillographies}
      handleOscillographiesRelay={handleOscillographiesRelay}
      onClickOscillography={onClickOscillography}
    />
  );
};

export default OscillographList;
