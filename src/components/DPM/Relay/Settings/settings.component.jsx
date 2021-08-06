import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { connect } from "react-redux";
import { updateAlert } from "../../../../redux/alert/alertActions";
import SelectableTable from "./components/SelectableTable";
import Pagination from "../../../../reusable/Pagination";
import Spinner from "../../../../reusable/Spinner";
import Button from "../../../Button";
import CurrentTable from "./components/CurrentTable";
import "./index.css";

const SettingsComponent = ({
  getRelayIDSettings,
  handleSettingsRelay,
  handleRelaySettingsFile,
  dispatchAlert,
  relayUpdated,
  updated,
  alert,
}) => {
  const [listSettings, setListSettings] = useState({});
  const [selected, setSelected] = useState([]);
  const [isDownload, setIsDownload] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [currentSetting, setCurrentSetting] = useState({});
  const size = 7;
  const totalPage = (total) => Math.ceil(total / size);

  useEffect(() => {
    onPageChange();
  }, []);

  const onPageChange = async (page = 0) => {
    const listSettings = await getRelayIDSettings(page, size);
    if (page === 0) {
      setCurrentSetting(listSettings.data[0]);
    }
    setListSettings(listSettings);
    setActivePage(page);
  };

  const onClickSettings = async () => {
    setIsDownload(true);
    setSelected([]);
    await handleSettingsRelay(selected);
    setIsDownload(false);
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

  const handleFile = async () => {
    if (document.querySelector('input[type="file"]').files[0] !== undefined) {
      const file = new FormData();
      const imagedata = document.querySelector('input[type="file"]').files[0];
      file.append("file", imagedata);
      await handleRelaySettingsFile(file);
      updated(true);
    }
  };

  return (
    <div className="settings">
      {listSettings.data && !isDownload ? (
        listSettings.data.length > 0 ? (
          <>
            <div className="settings__header">
              <div className="settings__header__content">
                <Typography className="settings__title">Ajustes</Typography>
                <label className="settings__label__file">
                  Subir nuevo archivo
                  <input
                    type="file"
                    name="files"
                    style={{ visibility: "hidden" }}
                    className="settings__input__file"
                    onChange={handleFile}
                  ></input>
                </label>
              </div>
              <div className="settings__button">
                <RefreshIcon
                  className="settings__button__refresh"
                  onClick={() => onPageChange(0)}
                />
                <Button
                  color={selected.length > 0 ? "#20BA87" : "#2A2A42"}
                  textButton="Descargar zip"
                  disabled={selected.length > 0 ? false : true}
                  onClickButton={onClickSettings}
                />
              </div>
            </div>

            <Typography className="settings__outdated">
              {!relayUpdated && "Hay que actualizar el archivo de ajustes"}
            </Typography>

            <div className="settings__container">
              <CurrentTable listSettings={currentSetting} />
              <SelectableTable
                onClickSelected={onClickSelected}
                listSettings={listSettings.data}
              />
              <Pagination
                totalPages={totalPage(listSettings.total)}
                onPageChange={onPageChange}
                activePage={activePage}
              />
            </div>
          </>
        ) : (
          <Typography className="settings__subtitle">
            No hay ajustes registrados,
          </Typography>
        )
      ) : (
        <Spinner description={!!isDownload && "Descargando archivos"} />
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
export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);
