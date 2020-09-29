import React, { Fragment } from "react";
import Form from "./Form";
import Moods from "./Moods";
import HeatMap from "./HeatMap";

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Moods />
            <HeatMap />
        </Fragment>
    );
}
