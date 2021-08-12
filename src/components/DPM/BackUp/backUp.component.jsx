import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateAlert } from "../../../redux/alert/alertActions";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import { useNotification } from "../../../hooks/notification";
import Button from "../../Button";
import Pagination from "../../../reusable/Pagination";
import SelectableTable from "./components/SelectableTable";
import Spinner from "../../../reusable/Spinner";
import "./index.css";

const BackUpComponent = ({
  getAllRelays,
  dispatchAlert,
  alert,
  handleBackupRelays,
}) => {
  const [listRelays, setListRelays] = useState({});
  const [activePage, setActivePage] = useState(0);
  const [selected, setSelected] = useState([]);
  const { onError, onSuccess } = useNotification();
  const headers = ["Nombre", "N subestación", "Paño"];
  const size = 14;
  const totalPage = (total) => Math.ceil(total / size);

  useEffect(() => {
    onPageChange(0, size);
  }, []);

  const onPageChange = async (page) => {
    try {
      const listRelays = await getAllRelays(page, size);
      setListRelays(listRelays);
      setActivePage(page);
    } catch (error) {
      onError(error);
    }
  };

  const onClickBackup = async () => {
    try {
      await handleBackupRelays(selected);
      onPageChange(0);
      setSelected([]);
      dispatchAlert("");
      onSuccess("Sus cambios se guardaron correctamente");
    } catch (error) {
      onError("No se pudo guardar sus cambios, intente nuevamente");
    }
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
          disabled={selected.length > 0 ? false : true}
          onClickButton={onClickBackup}
        />
      </div>
      {Object.keys(listRelays) && Object.keys(listRelays).length !== 0 ? (
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
