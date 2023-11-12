import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import {Buttons} from '../../types';
import Button from '../Button/Button';
import {motion, AnimatePresence} from 'framer-motion';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons?: Buttons[];
}
const Modal: React.FC<Props> = ({show,
                                title,
                                onClose,
                                buttons,
                                children}) =>
{
    
    let modalFooter: React.ReactNode = null;
    
    if (buttons) {
      modalFooter = (
        <div className="modal-footer">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              type={btn.type}
              onClick={btn.onClick}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      );
    }
    
    const onInnerClick = (event: React.MouseEvent) => {
      event.stopPropagation();
    };
    
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <AnimatePresence>
        {show && (
          <motion.div
            animate={{ y: 100, opacity: 1 }}
            initial={{ y: 0, opacity: 0 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ opacity: { duration: 0.3 }}}
            className="modal show"
            style={{display: show ? 'block' : 'none'}}
            onClick={onClose}
          >
            <div className="modal-dialog" onClick={onInnerClick}>
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">{title}</h1>
                  <button type="button" className="btn-close" onClick={onClose} />
                </div>
                {children}
                {modalFooter}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;