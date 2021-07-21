import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubstation as obtainSubstations } from "../../../redux/substations/substationsActions";
import { substations as substationsService } from "../../../api/substationsService";
import HomeComponent from "./home.component";

const Home = (props) => {
  const getSubstations = async () => {
    if (props.substations.length === 0) {
      try {
        const data = await substationsService();
        props.dispatchSubstations(data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
  };

  useEffect(() => {
    getSubstations();
  }, []);

  return <HomeComponent substations={props.substations} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSubstations: (substations) =>
      dispatch(obtainSubstations(substations)),
  };
};

const mapStateToProps = (state) => {
  return state.substations;
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
