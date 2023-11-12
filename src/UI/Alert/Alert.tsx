import React, {useState} from 'react';

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
      <div
        className={`alert alert-${type} d-flex justify-content-between show`}
        style={{cursor: 'pointer'}}
        onClick={() => setIsDismissed(false)}
      >
        <div className="col d-flex justify-content-between">
          {children}
          <div className="badge text-bg-info">Dismissible on click</div>
        </div>
      </div>
    );
  }
  
  if (!clickDismissible) {
    return (
      <div
        className={`alert alert-${type} d-flex justify-content-between show`}
      >
        {children}
        {closeBtn}
      </div>
    );
  }
};

export default Alert;