import React, { Fragment } from "react";
import MoodForm from "./MoodForm";
import Moods from "./Moods";
import HeatMap from "./HeatMap";
import BarPlot from "./BarPlot";
import BarPlotBad from "./BarPlotBad";
import BPSleep from "./BPSleep";
import BPSleepBad from "./BPSleepBad";
import Modal from "react-modal";
import "./Dashboard.css";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#app");

function Dashboard() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Fragment>
            <div id="body">
                <div className="grid-container">
                    <div className="grid-item">
                        <HeatMap />
                    </div>
                </div>

                <button id="newMood" onClick={openModal}>
                    +
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>x</button>
                    <br />
                    <div>
                        <MoodForm closeModal={() => setIsOpen(false)} />
                    </div>
                </Modal>

                <div className="grid-container-graphs">
                    <div class="grid-item-graph">
                        <BarPlot />
                    </div>
                    <div class="grid-item-graph">
                        <BarPlotBad />
                    </div>
                    <div class="grid-item-graph">
                        <BPSleep />
                    </div>
                    <div class="grid-item-graph">
                        <BPSleepBad />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;
