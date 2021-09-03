import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { useNotification } from "../../../../../../hooks/notification";
import { updateAlert } from "../../../../../../redux/alert/alertActions";
import SelectableTable from "../SelectableTable";
import Pagination from "../../../../../../reusable/Pagination";
import Spinner from "../../../../../../reusable/Spinner";
import Button from "../../../../../Button";
import "./index.css";

const OscillographListComponent = ({
  getRelayIDOscillographies,
  handleOscillographiesRelay,
  dispatchAlert,
  onClickOscillography,
  alert,
}) => {
  const [listOscillographies, setListOscillographies] = useState({});
  const [selected, setSelected] = useState([]);
  const [isDownload, setIsDownload] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const { onError, onSuccess } = useNotification();
  const size = 16;
  const totalPage = (total) => Math.ceil(total / size);

  useEffect(() => {
    onPageChange(0);
  }, []);

  const onPageChange = async (page) => {
    try {
      const listOscillographies = await getRelayIDOscillographies(page, size);
      setListOscillographies(listOscillographies);
      setActivePage(page);
    } catch (error) {
      onError(error);
    }
  };

  const onClickOscillographies = async () => {
    setIsDownload(true);
    try {
      setSelected([]);
      await handleOscillographiesRelay(selected);
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

  return (
    <div className="oscillographList">
      {listOscillographies.data && !isDownload ? (
        listOscillographies.data.length > 0 ? (
          <>
            <div className="oscillographList__header">
              <Typography className="oscillographList__title">
                Oscilografías Registradas
              </Typography>
              <div className="oscillographList__button">
                <Button
                  color={selected.length > 0 ? "#20BA87" : "#2A2A42"}
                  textButton="Descargar zip"
                  disabled={selected.length > 0 ? false : true}
                  onClickButton={onClickOscillographies}
                />
              </div>
            </div>
            <div className="oscillographList__container">
              <SelectableTable
                onClickSelected={onClickSelected}
                onClickOscillography={onClickOscillography}
                listOscillographies={listOscillographies.data}
              />
              <Pagination
                totalPages={totalPage(listOscillographies.total)}
                onPageChange={onPageChange}
                activePage={activePage}
              />
            </div>
          </>
        ) : (
          <Typography className="oscillographList__subtitle">
            No hay oscilografias registrados
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OscillographListComponent);
