import React, {useState} from 'react';
import Alert from '../../UI/Alert/Alert';

const AlertDismissible: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const dismissAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <>
      {showAlert ? (
        <Alert
          type="warning"
          onDismiss={dismissAlert}
        >
          This alert has dismiss button
        </Alert>
      ) : null}
    </>
  );
};

export default AlertDismissible;