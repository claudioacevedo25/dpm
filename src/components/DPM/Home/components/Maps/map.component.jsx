import React from "react";
import { Card, CardContent } from "@material-ui/core";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./index.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -25,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -15, name: "Prueba", coordinates: [-60.375797, -26.451159] },

  { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

const MapComponent = () => {
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
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((d) => d.properties.REGION_UN === "Americas")
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                  />
                ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={6} fill="#19192B" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </CardContent>
    </Card>
  );
};

export default MapComponent;
