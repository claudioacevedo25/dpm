import React from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import Table from "./components/Table";
import Button from "../../Button";
import Spinner from "../../../reusable/Spinner";
import "./index.css";

const IDEComponent = ({ ...props }) => {
  const isSelected = (selected) => Object.keys(selected).length !== 0;

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
      {props.substations.length !== 0 ? (
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
          {isSelected(props.substationSelected.substation) && (
            <div className="ide__tablesContainer__item">
              {props.panios.length > 0 ? (
                <Table header="Paño" rows={props.panios} type="panio" />
              ) : (
                <Spinner className="spinner_item" />
              )}
            </div>
          )}
          {isSelected(props.substationSelected.panio) && (
            <div className="ide__tablesContainer__item">
              {props.relays.length > 0 ? (
                <Table header="N de relé" rows={props.relays} type="relay" />
              ) : (
                <Spinner />
              )}
            </div>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default IDEComponent;
