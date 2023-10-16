import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ 
  children, 
  toggle, 
  styles, 
  visible=false,
  }) => {

  useEffect(() => {

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggle();
    };
  }


  return createPortal(
    <div className={visible ? `${css.backdrop} ${css.show}` : css.backdrop} onClick={handleBackdropClick}>
      <div className={css.fence_container}>
        <div className={styles}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
