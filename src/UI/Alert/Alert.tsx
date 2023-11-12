import React from 'react';

interface Props extends React.PropsWithChildren{
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: React.MouseEventHandler;
  show?: boolean;
}
const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {
  let closeBtn: React.ReactNode = null;
  
  if (onDismiss) {
    closeBtn = (
      <button type="button" className="btn-close ms-auto" onClick={onDismiss}/>
    );
  }
  
  return (
    <div
      className={`alert alert-${type} alert-dismissible show`}
      style={{display: show ? 'block' : 'none'}}
      onClick={onDismiss}
      role="alert"
    >
      {children}
      {closeBtn}
    </div>
  );
};

export default Alert;