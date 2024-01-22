import Modal from "./companents/Modal";
import {useState} from "react";
import Alert from "./companents/Alerts/Alert";

function App() {
    const [showModal, setShowModal] = useState(true);
    const closeAlert = () => {
    }
  return (
    <>
      <Modal
          show = {showModal}
          title = 'Modal'
          onClose = {() => setShowModal(false)}
      >
        <button className="btn-danger" onClick={() => setShowModal(false)}>X</button>
      </Modal>
        <div>
            <Alert
                type='success'
                onDismiss={closeAlert}
            >
                Alert
            </Alert>
            <Alert
                type='success'
            >
                Alert
            </Alert>
            <Alert
                type='primary'
            >
                Alert
            </Alert>
        </div>
    </>
  )
}

export default App;
