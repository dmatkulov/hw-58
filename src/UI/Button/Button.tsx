import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  onClick: React.MouseEventHandler;
}
const Button: React.FC<Props> = ({type, onClick, children}) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>{children}</button>
  );
};

export default Button;