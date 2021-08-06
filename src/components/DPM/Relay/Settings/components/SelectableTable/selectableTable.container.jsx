import React from "react";
import SelectableTableComponent from "./selectableTable.component";

const SelectableTable = ({ onClickSelected, listSettings }) => {
  return (
    <SelectableTableComponent
      onClickSelected={onClickSelected}
      listSettings={listSettings}
    />
  );
};

export default SelectableTable;
