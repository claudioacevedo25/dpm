import React from "react";
import {
  allRelays as allRelaysService,
  backupRelays,
} from "../../../api/relaysService";
import BackUpComponent from "./backUp.component";

const BackUp = () => {
  const getAllRelays = async (page = 0) => {
    try {
      const data = await allRelaysService(page, 8);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleBackupRelays = async (listRelays) => {
    const selectedRelay = { data: listRelays };
    try {
      await backupRelays(selectedRelay);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <BackUpComponent
      getAllRelays={getAllRelays}
      handleBackupRelays={handleBackupRelays}
    />
  );
};

export default BackUp;
