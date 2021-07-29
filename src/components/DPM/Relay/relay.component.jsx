import React, { useState } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import Events from "./Events";
import "./index.css";

const RelayComponent = ({ relayID, relayName }) => {
  const [valueTab, setValueTab] = useState(1);
  const tabs = [
    { name: "Osilografías", disabled: true },
    { name: "Eventos" },
    { name: "Reportes", disabled: true },
  ];

  const handleStateTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const TabPanel = ({ children, value, index }) => {
    return value === index && children;
  };

  return (
    <div className="relay">
      <div className="relay__header">
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

      <div>
        <TabPanel value={valueTab} index={0}>
          {" "}
          cosas1
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <Events relayID={relayID} />
        </TabPanel>
        <TabPanel value={valueTab} index={2}>
          cosas 2
        </TabPanel>
      </div>
    </div>
  );
};

export default RelayComponent;
