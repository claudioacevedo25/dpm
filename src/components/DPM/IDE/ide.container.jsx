import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubstation as obtainSubstations } from "../../../redux/substations/substationsActions";
import { updateSubstation } from "../../../redux/substationStructure/substationStructureActions";
import { substations as substationsService } from "../../../api/substationsService";
import IDEComponent from "./ide.component";

const IDE = ({
  substations,
  substationSelected,
  dispatchSubstations,
  dispatchSelectedSubstation,
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
    return () => dispatchSelectedSubstation("");
  }, []);

  return (
    <>
      <IDEComponent
        substations={substations.substations}
        substationSelected={substationSelected}
        {...props}
      />
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
    dispatchSelectedSubstation: (substation) =>
      dispatch(updateSubstation(substation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IDE);
