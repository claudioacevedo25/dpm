import React from "react";
import {
  getSettings,
  downloadSettings,
  settingsFile,
} from "../../../../api/settingsService";
import SettingsComponent from "./settings.component";

const Settings = ({ relayID, relayUpdated, updated }) => {
  const getRelayIDSettings = async (page = 0, size) => {
    try {
      const data = await getSettings(relayID, page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleSettingsRelay = async (listRelays) => {
    try {
      const data = await downloadSettings(relayID, listRelays);
      window.location.assign(data["url"]);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleRelaySettingsFile = async (file) => {
    try {
      await settingsFile(relayID, file);
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
