import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubstation as obtainSubstations } from "../../../redux/substations/substationsActions";
import { substations as substationsService } from "../../../api/substationsService";
import { panios as paniosService } from "../../../api/paniosService";
import { relays as relaysService } from "../../../api/relaysService";
import IDEComponent from "./ide.component";

const IDE = ({
  substations,
  substationSelected,
  dispatchSubstations,
  ...props
}) => {
  const getSubstations = async () => {
    if (substations.substations.length === 0) {
      try {
        const data = await substationsService();
        dispatchSubstations(data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
  };

  useEffect(() => {
    getSubstations();
  }, []);

  return (
    <>
      {substations.substations.length !== 0 && (
        <IDEComponent
          substations={substations.substations}
          substationSelected={substationSelected}
          {...props}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSubstations: (substations) =>
      dispatch(obtainSubstations(substations)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IDE);
