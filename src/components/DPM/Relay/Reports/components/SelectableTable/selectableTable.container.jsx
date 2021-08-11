import React from "react";
import SelectableTableComponent from "./selectableTable.component";

const SelectableTable = ({ onClickSelected, listReports }) => {
  return (
    <SelectableTableComponent
      onClickSelected={onClickSelected}
      listReports={listReports}
    />
  );
};

export default SelectableTable;
