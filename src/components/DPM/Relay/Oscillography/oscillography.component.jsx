import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateAlert } from "../../../../redux/alert/alertActions";
import OscillographList from "./components/OscillographList";
import OscillographyDisturbances from "./components/OscillographyDisturbances";
import "./index.css";

const OscillographyComponent = ({ relayID }) => {
  const [selectedOscillography, setSelectedOscillography] = useState(null);
  console.log("object :>> ", selectedOscillography);
  return (
    <div className="oscillographies">
      {selectedOscillography === null ? (
        <OscillographList
          onClickOscillography={setSelectedOscillography}
          relayID={relayID}
        />
      ) : (
        <OscillographyDisturbances
          relayID={relayID}
          oscillographyID={selectedOscillography.id}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAlert: (alert) => dispatch(updateAlert(alert)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OscillographyComponent);
