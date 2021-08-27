import React, {useState} from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import Substations from "./components/Substations";
import Maps from "./components/Map";
import Spinner from "../../../reusable/Spinner";
import "./index.css";

const HomeComponent = (props) => {
const [showTooltip, setShowTooltip] = useState(null);

const handleTooltip = (subStation) =>{
  if(!!showTooltip){
    setShowTooltip(null);
    return;
  }
  setShowTooltip(subStation.id);
}

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
      <Typography className="home__subtitle">
        Conoce el estado de cada subestación
      </Typography>

      <div className="home__substations">
        {props.substations.length > 0 ? (
          <>
            <div className="home__substations__map">
              <Maps substations={props.substations} selected={showTooltip} />
            </div>
            <div className="home__substations__table">
              <Substations substations={props.substations} handleTooltip={handleTooltip}  />
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
