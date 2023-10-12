import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose, styles }) => {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={styles}>{children}</div>
    </div>,
    modalRoot
  );
};
