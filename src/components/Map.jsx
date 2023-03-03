import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
    fill="#fff"
    stroke="white"
    strokeWidth = "2"
     projectionConfig={{ scale: 147 }}
    >
      <Graticule stroke="#aba3a2" />
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
