import React from 'react';
import Alert from '../../UI/Alert/Alert';

const AlertClickDismissible: React.FC = () => {
  return (
    <>
      <Alert
        type="primary"
        clickDismissible
      >
        This alert is dismissible on click
      </Alert>
      
    </>
  );
};

export default AlertClickDismissible;