import React from "react";
import {
  allRelays as allRelaysService,
  backupRelays,
} from "../../../api/relaysService";
import BackUpComponent from "./backUp.component";

const BackUp = () => {
  const getAllRelays = async (page = 0, size) => {
    try {
      const data = await allRelaysService(page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleBackupRelays = async (listRelays) => {
    try {
      await backupRelays(listRelays);
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
