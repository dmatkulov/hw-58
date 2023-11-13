import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

interface Props {
  show: boolean;
  onClick: React.MouseEventHandler;
}
const Backdrop: React.FC<Props> = ({show, onClick}) => {
  return (
      <>
        <AnimatePresence>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 0.5}}
            exit={{opacity: 0}}
            className="modal-backdrop show"
            style={{display: show ? 'block' : 'none'}}
            onClick={onClick}
          />
        </AnimatePresence>
      </>
  );
};

export default Backdrop;