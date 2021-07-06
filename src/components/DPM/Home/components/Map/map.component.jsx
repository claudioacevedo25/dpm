import React from "react";
import { Card, CardContent } from "@material-ui/core";
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
            {props.substations.map(({ name, lat, lon, is_fail }) => (
              <Marker key={name} coordinates={[lon, lat]}>
                <circle
                  r={6}
                  fill={is_fail ? "#2bd283" : "#d22b53"}
                  stroke="#fff"
                  strokeWidth={2}
                />
                {/* aca deberia uir una card para que muestre los datos */}
                <text
                  textAnchor="middle"
                  y="-15"
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </CardContent>
    </Card>
  );
};

export default MapComponent;
