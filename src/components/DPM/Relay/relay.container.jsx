import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRelayID as getRelayIDService } from "../../../api/relaysService";
import RelayComponent from "./relay.component";

const Relay = () => {
  const { relayId, relayName } = useParams();
  const [dataRelay, setDataRelay] = useState({});

  const getRelayID = async () => {
    try {
      const data = await getRelayIDService(relayId);
      setDataRelay(data);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // useEffect(() => {
  //   getRelayID();
  // }, []);

  return (
    <RelayComponent
      relayID={relayId}
      relayName={relayName}
      getRelayID={getRelayID}
    />
  );
};

export default Relay;
