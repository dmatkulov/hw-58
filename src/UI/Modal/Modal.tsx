import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import {Buttons} from '../../types';
import Button from '../Button/Button';

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
      <Backdrop
        show={show}
        onClick={onClose}
      />
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={onInnerClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose}/>
            </div>
           {children}
           {modalFooter}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;