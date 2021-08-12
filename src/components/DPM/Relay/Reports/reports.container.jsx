import React from "react";
import {
  getReports,
  downloadReports,
  reportsFile,
} from "../../../../api/reportsService";
import ReportsComponent from "./reports.component";

const Reports = ({ relayID }) => {
  const getRelayIDReports = async (page = 0, size) => {
    const data = await getReports(relayID, page, size);
    return data;
  };

  const handleReportsRelay = async (listRelays) => {
    const data = await downloadReports(relayID, listRelays);
    window.location.assign(data["url"]);
    return data;
  };

  const handleRelayReportsFile = async (file) => {
    const data = await reportsFile(relayID, file);
    return data;
  };

  return (
    <ReportsComponent
      getRelayIDReports={getRelayIDReports}
      handleReportsRelay={handleReportsRelay}
      handleRelayReportsFile={handleRelayReportsFile}
    />
  );
};

export default Reports;
