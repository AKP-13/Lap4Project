import React, { Fragment } from "react";
import Modal from "react-modal";
import JournalForm from "../moodtracker/JournalForm";
import "./ModalJournal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

function ModalJournal() {
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
            <button id="addToJournal" onClick={openModal}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <Modal
                id="mymodal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button id="closemodal" onClick={closeModal}>
                    Cancel
                </button>
                <br />
                <div>
                    <JournalForm closeModal={() => setIsOpen(false)} />
                </div>
            </Modal>
        </Fragment>
    );
}

export default ModalJournal;
