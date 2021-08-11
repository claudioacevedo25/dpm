import React from "react";
import { useParams } from "react-router-dom";
import { getRelayID as getRelayIDService } from "../../../api/relaysService";
import RelayComponent from "./relay.component";

const Relay = () => {
  const { relayId, relayName } = useParams();

  const getRelayID = async () => {
    try {
      const data = await getRelayIDService(relayId);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <RelayComponent
      relayID={relayId}
      relayName={relayName}
      getRelayID={getRelayID}
    />
  );
};

export default Relay;
