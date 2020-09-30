import React, { Fragment } from "react";
import Form from "./Form";
import Moods from "./Moods";
import HeatMap from "./HeatMap";
import BarPlot from "./BarPlot";
import BarPlotBad from "./BarPlotBad";

export default function Dashboard() {
  return (
    <Fragment>
      <HeatMap />
      {/* <Form /> */}
      {/* <Moods /> */}
      <BarPlot />
      <BarPlotBad />
    </Fragment>
  );
}
