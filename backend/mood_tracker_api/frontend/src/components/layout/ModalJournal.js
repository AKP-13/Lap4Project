import React, { Fragment } from "react";
import Modal from "react-modal";
import JournalForm from "../moodtracker/JournalForm";

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
      <button onClick={openModal}>Add Journal Entry</button>
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
          <JournalForm closeModal={() => setIsOpen(false)} />
        </div>
      </Modal>
    </Fragment>
  );
}

export default ModalJournal;
