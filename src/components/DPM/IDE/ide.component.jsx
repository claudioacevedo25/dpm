import React from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import Table from "./components/Table";
import Button from "../../Button";
import "./index.css";

const IDEComponent = ({ ...props }) => {
  const isTrue = (selected, list) =>
    Object.keys(selected).length !== 0 && list.length !== 0;
  const canNext = (selectedRelay) => Object.keys(selectedRelay).length !== 0;

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
      <div className="ide__button">
        <Button
          disabled={!canNext(props.substationSelected.relay)}
          color={
            canNext(props.substationSelected.relay) ? "#20BA87" : "#2A2A42"
          }
          textButton="Continuar"
        />
      </div>
      <div className="ide__tablesContainer">
        {!!props.substations && props.substations.length !== 0 && (
          <div className="ide__tablesContainer__item">
            <Table
              header="N de subestación"
              rows={props.substations}
              type="substation"
            />
          </div>
        )}
        {isTrue(props.substationSelected.substation, props.panios) && (
          <div className="ide__tablesContainer__item">
            <Table header="Paño" rows={props.panios} type="panio" />
          </div>
        )}
        {isTrue(props.substationSelected.panio, props.relays) && (
          <div className="ide__tablesContainer__item">
            <Table header="N de relé" rows={props.relays} type="relay" />
          </div>
        )}
      </div>
    </div>
  );
};

export default IDEComponent;
