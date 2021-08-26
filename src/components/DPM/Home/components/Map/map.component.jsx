import React, {useEffect, useState} from "react";
import { Card, CardContent, Tooltip, Zoom } from "@material-ui/core";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./index.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapComponent = (props) => {

  const [selectedSubstation, setSelectedSubstation] = useState(props.selected);

  const handleTooltip = (id) => {
   setSelectedSubstation(id)
  };

  const handleClose = () => {
    setSelectedSubstation(null)
  }

  useEffect(()=>{
    setSelectedSubstation(props.selected)
  },[props.selected])


  return (
    <Card className="map">
      <CardContent className="map">
        <ComposableMap
          className="map"
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [58, 20, 0],
            scale: 400,
          }}
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                  // .filter((d) => d.properties.REGION_UN === "Americas")
                  .map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#ebeced"
                      stroke="#D6D6DA"
                    />
                  ))
              }
            </Geographies>
            {props.substations.map(({ id, name, lat, lon, is_fail }) => (
              <Marker key={name} coordinates={[lon, lat]}>
                  <Tooltip
                    title={name} 
                    TransitionComponent={Zoom} 
                    open={selectedSubstation === id ? true : false} 
                    onClose={handleClose}
                    disableHoverListener
                    arrow 
                    interactive
                    >       
                    
                        <circle
                          r={6}
                          fill={is_fail ?  "#d22b53" : "#2bd283" }
                          stroke="#fff"
                          strokeWidth={2}     
                          onClick={()=>handleTooltip(id)}  
                          />
                     
                    </Tooltip>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </CardContent>
    </Card>
  );
};

export default MapComponent;
