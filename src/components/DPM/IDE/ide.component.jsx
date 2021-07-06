import React from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import Table from "./components/Table";
import "./index.css";

const IDEComponent = () => {
  return (
    <div className="ide">
      <div className="ide__header">
        <Typography className="ide__title">
          Selecciona subestación, paño y relé
        </Typography>
        <div className="ide__header__contentSearch">
          <TextField
            className="ide__header__contentSearch__search"
            type="search"
            label="Buscar"
            disabled={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="search"
            label="Filtrar"
            disabled={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FilterList />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IDEComponent;
