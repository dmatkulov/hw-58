import React from 'react';
import Alert from '../../UI/Alert/Alert';

const AlertStatic: React.FC = () => {
  return (
    <>
      <Alert
        type="success"
      >
        This is static alert
      </Alert>
    </>
  );
};

export default AlertStatic;