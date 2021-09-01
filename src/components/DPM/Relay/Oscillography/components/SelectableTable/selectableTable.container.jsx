import React from "react";
import SelectableTableComponent from "./selectableTable.component";

const SelectableTable = ({
  onClickSelected,
  listOscillographies,
  onClickOscillography,
}) => {
  return (
    <SelectableTableComponent
      onClickSelected={onClickSelected}
      listOscillographies={listOscillographies}
      onClickOscillography={onClickOscillography}
    />
  );
};

export default SelectableTable;
