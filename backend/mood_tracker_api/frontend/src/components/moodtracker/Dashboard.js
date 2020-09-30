import React, { Fragment } from "react";
import Form from "./Form";
import Moods from "./Moods";
import HeatMap from "./HeatMap";
import BarPlot from "./BarPlot";
import BarPlotBad from "./BarPlotBad";
import BPSleep from "./BPSleep";
import BPSleepBad from "./BPSleepBad";
import Modal from "react-modal";

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
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <br />
                <div>I am a modal</div>
                <div>
                    <Form closeModal={() => setIsOpen(false)} />
                </div>
            </Modal>

            <HeatMap />
            {/* <Form /> */}
            {/* <Moods /> */}
            <BarPlot />
            <BarPlotBad />
            <BPSleep />
            <BPSleepBad />
        </Fragment>
    );
}

export default Dashboard;
