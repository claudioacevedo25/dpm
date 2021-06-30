import React from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import "./index.css";

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Typography className="home__title">Inicio</Typography>
        <div className="home__header__contentSearch">
          <TextField
            className="home__header__contentSearch__search"
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

export default HomeComponent;
