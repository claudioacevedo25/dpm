import React from "react";
import { useParams } from "react-router-dom";
import RelayComponent from "./relay.component";

const Relay = () => {
  const { relayId, relayName } = useParams();

  return <RelayComponent relayID={relayId} relayName={relayName} />;
};

export default Relay;
