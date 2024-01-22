import Modal from "./companents/Modal";
import {useState} from "react";

function App() {
    const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Modal
          show = {showModal}
          title = 'Modal'
          onClose = {() => setShowModal(false)}
      >
        <button className="btn-danger" onClick={() => setShowModal(false)}>X</button>
      </Modal>
    </>
  )
}

export default App;
