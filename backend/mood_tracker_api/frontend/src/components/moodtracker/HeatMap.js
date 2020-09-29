import React from "react";
import HeatMap from "react-heatmap-grid";

// const xLabels = [Week1, Week2, Week3, Week4, Week5];
const yLabels = ["Week1", "Week2"];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//data will be our array split in arrays of 7 instances
//dummy data
const data = [
    [1, 0, 5, 2, 0, 3, 7],
    [0, 5, 3, 5, 5, 4, 1],
];

const xLabelsVisibility = new Array(24).fill(true);

export default function () {
    return (
        <div style={{ fontSize: "13px" }}>
            <HeatMap
                xLabels={xLabels}
                yLabels={yLabels}
                xLabelsLocation={"bottom"}
                xLabelsVisibility={xLabelsVisibility}
                xLabelWidth={60}
                data={data}
                squares
                height={45}
                onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                cellStyle={(background, value, min, max, data, x, y) => ({
                    background: `rgb(0, 151, 230, ${
                        1 - (max - value) / (max - min)
                    })`,
                    fontSize: "0px",
                    color: "#444",
                })}
                cellRender={(value) => value && <div>{value}</div>}
            />
        </div>
    );
}
