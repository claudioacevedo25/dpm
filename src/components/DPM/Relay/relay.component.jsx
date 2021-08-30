import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { recoverSelection } from '../../../redux/substationStructure/substationStructureActions'
import { connect } from "react-redux";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import {
  Typography,
  TextField,
  InputAdornment,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Search, FilterList, FiberManualRecord } from "@material-ui/icons";
import Oscillography from "./Oscillography/oscillography.container";
import Events from "./Events";
import Settings from "./Settings";
import Reports from "./Reports";
import "./index.css";

const RelayComponent = ({ relayID, relayName, getRelayID, recoverSelectionData, ...props}) => {
  const history = useHistory();
  const [valueTab, setValueTab] = useState(1);
  const [relayUpdated, setRelayUpdated] = useState(null);
  const [substation, setSubstation] = useState('');
  const [panio, setPanio] = useState('');

  const tabs = [
    { name: "Osilografías" },
    { name: "Eventos" },
    { name: "Reportes" },
    { name: "Ajustes", state: relayUpdated },
  ];

  useEffect(() => {
    getRelays();
  }, []);

  const getRelays = async () => {
    const data = await getRelayID();
    setRelayUpdated(data.updated);
    setSubstation(data.substation);
    setPanio(data.panio)
    console.log(data)
  };

  const handleStateTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const TabPanel = ({ children, value, index }) => {
    return value === index && children;
  };

  const backAction = () => {
    history.goBack()
    props.substationSelected.backup && recoverSelectionData()
  }

  return (
    <div className="relay">
      <div className="relay__header">
      <div className="relay__header_data">
      <ArrowBackIosRoundedIcon  fontSize="small" className="relay__back__arrow" onClick={backAction}/>
      {relayUpdated !== null &&<Typography style={{float:'left'}}className="">{`
      ${substation} /
      ${panio}`}</Typography>}
      </div>
        <Typography className="relay__title">{relayName}</Typography>
        <div className="relay__header__container">
          <AppBar className="relay__header__appBar" position="static">                    
            <Tabs
              className="relay__header__appBar__tabs"
              value={valueTab}
              onChange={handleStateTabChange}
              aria-label="simple tabs example"
            >

              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  icon={
                    tab.state !== undefined &&
                    tab.state !== null &&
                    !tab.state && (
                      <FiberManualRecord className="relay__header__appBar__tabs__icon" />
                    )
                  }
                  disabled={!!tab.disabled && tab.disabled}
                  value={index}
                  className={`relay__header__appBar__tabs__item ${
                    index === valueTab && "relay__header__appBar__tabs--active"
                  }`}
                  label={tab.name}
                />
              ))}
            </Tabs>
          </AppBar>

          <div className="relay__header__contentSearch">
            <TextField
              className="relay__header__contentSearch__search"
              type="search"
              label="Buscar"
              disabled={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="search"
              label="Filtrar"
              disabled={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FilterList />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </div>
      {relayUpdated !== null && (
        <>
          <TabPanel value={valueTab} index={0}>
            <Oscillography relayID={relayID} />
          </TabPanel>
          <TabPanel value={valueTab} index={1}>
            <Events relayID={relayID} />
          </TabPanel>
          <TabPanel value={valueTab} index={2}>
            <Reports relayID={relayID} />
          </TabPanel>
          <TabPanel value={valueTab} index={3}>
            <Settings
              relayID={relayID}
              relayUpdated={relayUpdated}
              updated={setRelayUpdated}
            />
          </TabPanel>
        </>
      )}
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    recoverSelectionData: () =>
      dispatch(recoverSelection()),
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(RelayComponent);
