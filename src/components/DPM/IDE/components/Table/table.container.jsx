import React from "react";
import { connect } from "react-redux";
import { getPanios as obtainPanios } from "../../../../../redux/panios/paniosActions";
import { getRelays as obtainRelays } from "../../../../../redux/relays/relaysActions";
import { panios as paniosService } from "../../../../../api/paniosService";
import { getRelays as relaysService } from "../../../../../api/relaysService";
import TableComponent from "./table.component";

const Table = ({ dispatchnPanios, dispatchnRelays, ...props }) => {
  const getPanios = async (substationId) => {
    const params = { substation_id: substationId };
    try {
      const data = await paniosService(params);
      dispatchnPanios(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const getRelays = async (panioId) => {
    const params = { panio_id: panioId };
    try {
      const data = await relaysService(params);
      dispatchnRelays(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <TableComponent getPanios={getPanios} getRelays={getRelays} {...props} />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchnPanios: (panios) => dispatch(obtainPanios(panios)),
    dispatchnRelays: (relays) => dispatch(obtainRelays(relays)),
  };
};

export default connect(null, mapDispatchToProps)(Table);
