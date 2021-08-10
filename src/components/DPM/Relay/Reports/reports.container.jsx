import React from "react";
import {
  getReports,
  downloadReports,
  reportsFile,
} from "../../../../api/reportsService";
import ReportsComponent from "./reports.component";

const Reports = ({ relayID }) => {
  const getRelayIDReports = async (page = 0, size) => {
    try {
      const data = await getReports(relayID, page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleReportsRelay = async (listRelays) => {
    try {
      const data = await downloadReports(relayID, listRelays);
      window.location.assign(data["url"]);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleRelayReportsFile = async (file) => {
    try {
      await reportsFile(relayID, file);
    } catch (error) {
      console.log("error :>> ", error);
    }
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
