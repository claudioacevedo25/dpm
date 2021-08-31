import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { connect } from "react-redux";
import { useNotification } from "../../../../hooks/notification";
import { updateAlert } from "../../../../redux/alert/alertActions";
import SelectableTable from "./components/SelectableTable";
import Pagination from "../../../../reusable/Pagination";
import Spinner from "../../../../reusable/Spinner";
import Button from "../../../Button";
import CurrentTable from "./components/CurrentTable";
import "./index.css";

const ReportsComponent = ({
  getRelayIDReports,
  handleReportsRelay,
  handleRelayReportsFile,
  dispatchAlert,
  alert,
}) => {
  const [listReports, setListReports] = useState({});
  const [selected, setSelected] = useState([]);
  const [isDownload, setIsDownload] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [currentReport, setCurrentReport] = useState({});
  const { onError, onSuccess } = useNotification();
  const size = 14;
  const totalPage = (total) => Math.ceil(total / size);

  useEffect(() => {
    onPageChange();
  }, []);

  const onPageChange = async (page = 0) => {
    try {
      const listReports = await getRelayIDReports(page, size);
      if (page === 0) {
        setCurrentReport(listReports.data[0]);
      }
      setListReports(listReports);
      setActivePage(page);
    } catch (error) {
      onError(error);
    }
  };

  const onClickReports = async () => {
    setIsDownload(true);
    try {
      setSelected([]);
      await handleReportsRelay(selected);
      dispatchAlert({ isAlert: false });
      onSuccess("Descarga realizada con éxito");
    } catch (error) {
      onError("No se pudo realizar la descarga con éxito");
    }
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

      try {
        await handleRelayReportsFile(file);
        onSuccess("Su archivo se subio con éxito");
      } catch (error) {
        onError(error);
      }
    }
  };

  return (
    <div className="reports">
      {listReports.data && !isDownload ? (
        listReports.data.length > 0 ? (
          <>
            <div className="reports__header">
              <div className="reports__header__content">
                <Typography className="reports__title">Reportes</Typography>
                <label className="reports__label__file">
                  Subir nuevo archivo
                  <input
                    type="file"
                    name="files"
                    style={{ visibility: "hidden" }}
                    className="reports__input__file"
                    onChange={handleFile}
                  ></input>
                </label>
              </div>
              <div className="reports__button">
                <RefreshIcon
                  className="reports__button__refresh"
                  onClick={() => onPageChange(0)}
                />
                <Button
                  color={selected.length > 0 ? "#20BA87" : "#2A2A42"}
                  textButton="Descargar zip"
                  disabled={selected.length > 0 ? false : true}
                  onClickButton={onClickReports}
                />
              </div>
            </div>

            <div className="reports__container">
              <CurrentTable listReports={currentReport} />
              <SelectableTable
                onClickSelected={onClickSelected}
                listReports={listReports.data}
              />
              <Pagination
                totalPages={totalPage(listReports.total)}
                onPageChange={onPageChange}
                activePage={activePage}
              />
            </div>
          </>
        ) : (
          <Typography className="reports__subtitle">
            No hay reportes registrados,
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
export default connect(mapStateToProps, mapDispatchToProps)(ReportsComponent);
