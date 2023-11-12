import React, {useState} from 'react';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

const FirstModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <Button
        type="primary"
        onClick={() => setShowModal(true)}
      >
        Show first modal
      </Button>
      <Modal
        title="Some kinda modal title (1)"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
    </>
  );
};

export default FirstModal;