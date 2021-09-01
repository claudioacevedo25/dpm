import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";
import CardOscillography from "./cardOscillography.component";
import Spinner from "../../../../../../reusable/Spinner";
import "./index.css";

const OscillographyDisturbancesComponent = ({ getRelayIDOscillography }) => {
  const [oscillography, setOscillography] = useState(null);

  useEffect(() => {
    getOscillography();
  }, []);

  const getOscillography = async () => {
    try {
      const data = await getRelayIDOscillography();
      const oscillography = {
        deviceInformation: [
          { label: "Nombre de estación", information: data.station_name },
          { label: "Nombre de objeto", information: data.object_name },
        ],
        faultInformation: [
          {
            label: "Fecha de inicio y hora",
            information: moment(data.start).format(" DD/MM/YYYY HH:mm:sss"),
          },
          {
            label: "Fecha y hora de activación",
            information: moment(data.trigger).format(" DD/MM/YYYY HH:mm:sss"),
          },
        ],
        generalInformation: [
          { label: "Frecuencia del sistema", information: data.frequency },
        ],
      };
      setOscillography(oscillography);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <div className="oscillographyDisturbances">
      {oscillography !== null ? (
        <>
          <div className="oscillographyDisturbances__header">
            <Typography className="oscillographyDisturbances__title">
              Informe breve de perturbaciones
            </Typography>
          </div>
          <div className="oscillographyDisturbances__content">
            <div className="oscillographyDisturbances__cardOscillography">
              <CardOscillography
                title="Información del dispositivo"
                content={oscillography.deviceInformation}
              />
              <CardOscillography
                title="Información del dispositivo"
                content={oscillography.faultInformation}
              />
              <CardOscillography
                title="Información del dispositivo"
                content={oscillography.generalInformation}
              />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default OscillographyDisturbancesComponent;
