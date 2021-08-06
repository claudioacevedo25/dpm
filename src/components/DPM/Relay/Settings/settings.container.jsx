import React from "react";
import {
  getRelaySettings,
  downloadRelaySettings,
  relaySettingsFile,
} from "../../../../api/relaysService";
import SettingsComponent from "./settings.component";

const Settings = ({ relayID, relayUpdated, updated }) => {
  const getRelayIDSettings = async (page = 0, size) => {
    try {
      const data = await getRelaySettings(relayID, page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleSettingsRelay = async (listRelays) => {
    try {
      const data = await downloadRelaySettings(relayID, listRelays);
      window.location.assign(data["url"]);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleRelaySettingsFile = async (file) => {
    try {
      await relaySettingsFile(relayID, file);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <SettingsComponent
      relayUpdated={relayUpdated}
      updated={updated}
      getRelayIDSettings={getRelayIDSettings}
      handleSettingsRelay={handleSettingsRelay}
      handleRelaySettingsFile={handleRelaySettingsFile}
    />
  );
};

export default Settings;
