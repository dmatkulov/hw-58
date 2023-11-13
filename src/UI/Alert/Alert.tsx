import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

interface Props extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: React.MouseEventHandler;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({
    type,
    onDismiss,
    clickDismissible,
    children
  }) => {
  
  const [isDismissed, setIsDismissed] = useState(true);
  
  let closeBtn: React.ReactNode = null;
  
  if (onDismiss && !clickDismissible) {
    closeBtn = (
      <button type="button" className="btn-close ms-auto" onClick={onDismiss}/>
    );
  }
  return (
    <>
      <AnimatePresence>
        {isDismissed && clickDismissible && (
          <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{x: -100, opacity: 0}}
            className={`alert alert-${type} d-flex justify-content-between show`}
            style={{cursor: 'pointer'}}
            onClick={() => setIsDismissed(false)}
          >
            <div className="col d-flex justify-content-between">
              {children}
              <p className="small p-0 m-0">(Dismissible on click)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
        {!clickDismissible && (
          <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{x: -100, opacity: 0}}
            className={`alert alert-${type} d-flex justify-content-between show`}
          >
            {children}
            {closeBtn}
          </motion.div>
        )}
    </>
  );
};

export default Alert;