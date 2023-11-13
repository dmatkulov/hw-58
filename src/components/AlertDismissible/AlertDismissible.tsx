import React, {useState} from 'react';
import Alert from '../../UI/Alert/Alert';
import {AnimatePresence} from "framer-motion";

const AlertDismissible: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const dismissAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <>
      <AnimatePresence>
      {showAlert ? (
        <Alert
          type="warning"
          onDismiss={dismissAlert}
        >
          This alert has dismiss button
        </Alert>
      ) : null}
      </AnimatePresence>
    </>
  );
};

export default AlertDismissible;