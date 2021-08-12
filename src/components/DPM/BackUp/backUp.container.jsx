import React from "react";
import {
  allRelays as allRelaysService,
  backupRelays,
} from "../../../api/relaysService";
import BackUpComponent from "./backUp.component";

const BackUp = () => {
  const getAllRelays = async (page = 0, size) => {
    const data = await allRelaysService(page, size);
    return data;
  };

  const handleBackupRelays = async (listRelays) => {
    const data = await backupRelays(listRelays);
    return data;
  };

  return (
    <BackUpComponent
      getAllRelays={getAllRelays}
      handleBackupRelays={handleBackupRelays}
    />
  );
};

export default BackUp;
