import React, {useState} from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

const SecondModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  const cancel = () => {
    setShowModal(false);
  };

  const showAlert = () => {
    alert('Callback');
  };

  const btnConfig = [
    {type: 'primary', label: 'Continue', onClick: showAlert},
    {type: 'danger', label: 'Close', onClick: cancel}
  ];
  
  return (
    <>
      <Button
        type="success"
        onClick={() => setShowModal(true)}
      >
        Show second modal
      </Button>
      <Modal
        title="Some kinda title (2)"
        show={showModal}
        buttons={btnConfig}
        onClose={() => setShowModal(false)}
      >
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
    </>
  );
};

export default SecondModal;