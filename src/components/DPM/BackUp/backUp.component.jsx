import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateAlert } from "../../../redux/alert/alertActions";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import Button from "../../Button";
import Pagination from "../../../reusable/Pagination";
import SelectableTable from "./components/SelectableTable";
import Spinner from "../../../reusable/Spinner";
import "./index.css";

const BackUpComponent = ({ getAllRelays, dispatchAlert, alert }) => {
  const [listRelays, setListRelays] = useState({});
  const [activePage, setActivePage] = useState(0);
  const [selected, setSelected] = useState([]);
  const headers = ["Nombre", "N subestación", "Paño"];
  const totalPage = (total) => Math.ceil(total / 8);

  useEffect(() => {
    onPageChange(0);
  }, []);

  const onPageChange = async (page) => {
    setActivePage(page);
    const listRelays = await getAllRelays(page);
    setListRelays(listRelays);
  };

  const onClickSelected = async (selected) => {
    if (selected.length > 0 && !alert.isAlert) {
      const alert = {
        agree: "Continuar sin guardar",
        disagree: "Guardar ",
        isAlert: true,
        message: "¿Queres guardar los cambios antes de salir?",
      };
      dispatchAlert(alert);
    }
    if (selected.length === 0) {
      dispatchAlert({ isAlert: false });
    }
    setSelected(selected);
  };

  return (
    <div className="backUp">
      <div className="backUp__header">
        <Typography className="backUp__title">Backup</Typography>
        <div className="backUp__header__contentSearch">
          <TextField
            className="backUp__header__contentSearch__search"
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
      <div className="backUp__button">
        <Button
          color={selected.length > 0 ? "#20BA87" : "#2A2A42"}
          textButton="Guardar"
        />
      </div>
      {Object.keys(listRelays).length !== 0 ? (
        <>
          <SelectableTable
            onClickSelected={onClickSelected}
            headers={headers}
            rows={listRelays.data}
          />
          <Pagination
            totalPages={totalPage(listRelays.total)}
            onPageChange={onPageChange}
            activePage={activePage}
          ></Pagination>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAlert: (alert) => dispatch(updateAlert(alert)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BackUpComponent);
