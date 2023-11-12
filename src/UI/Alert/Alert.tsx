import React, {useState} from 'react';
import {motion} from 'framer-motion';

interface Props extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: React.MouseEventHandler;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, clickDismissible, children}) => {
  const [isDismissed, setIsDismissed] = useState(true);
  
  let closeBtn: React.ReactNode = null;
  
  if (onDismiss && !clickDismissible) {
    closeBtn = (
      <button type="button" className="btn-close ms-auto" onClick={onDismiss}/>
    );
  }
  
  if (isDismissed && clickDismissible) {
    return (
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -20, opacity: 0 }}
        className={`alert alert-${type} d-flex justify-content-between show`}
        style={{cursor: 'pointer'}}
        onClick={() => setIsDismissed(false)}
      >
        <div className="col d-flex justify-content-between">
          {children}
          <div className="badge text-bg-info">Dismissible on click</div>
        </div>
      </motion.div>
    );
  }
  
  if (!clickDismissible) {
    return (
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -20, opacity: 0 }}
        className={`alert alert-${type} d-flex justify-content-between show`}
      >
        {children}
        {closeBtn}
      </motion.div>
    );
  }
};

export default Alert;