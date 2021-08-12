import React from "react";
import {
  getSettings,
  downloadSettings,
  settingsFile,
} from "../../../../api/settingsService";
import SettingsComponent from "./settings.component";

const Settings = ({ relayID, relayUpdated, updated }) => {
  const getRelayIDSettings = async (page = 0, size) => {
    const data = await getSettings(relayID, page, size);
    return data;
  };

  const handleSettingsRelay = async (listRelays) => {
    const data = await downloadSettings(relayID, listRelays);
    window.location.assign(data["url"]);
    return data;
  };

  const handleRelaySettingsFile = async (file) => {
    const data = await settingsFile(relayID, file);
    return data;
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
