import React from "react";
import SelectableTableComponent from "./selectableTable.component";

const SelectableTable = ({ onClickSelected, listOscillographies }) => {
  return (
    <SelectableTableComponent
      onClickSelected={onClickSelected}
      listOscillographies={listOscillographies}
    />
  );
};

export default SelectableTable;
