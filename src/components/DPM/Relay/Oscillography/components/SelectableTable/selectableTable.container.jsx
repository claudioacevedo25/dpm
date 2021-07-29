import React from "react";
import SelectableTableComponent from "./selectableTable.component";

const SelectableTable = ({ onClickSelected, headers, rows }) => {
  return (
    <SelectableTableComponent
      onClickSelected={onClickSelected}
      headers={headers}
      rows={rows}
    />
  );
};

export default SelectableTable;
