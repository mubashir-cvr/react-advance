import React, { useEffect } from 'react';

const Modal = ({ modelContent, closeModel }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel();
    }, 2000);
  });
  return <div className="modal">{modelContent}</div>;
};

export default Modal;
