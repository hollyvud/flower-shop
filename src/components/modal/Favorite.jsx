import { useEffect } from "react";
import { createPortal } from "react-dom";

import '../../styles/main.scss'

export function ModalFavorite({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Запрещаем прокрутку страницы
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal__overlay" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">Избранное</h2>
          <div className="modal__close">
            <button className="head__button" onClick={onClose} aria-label="Закрыть">
              <span className='head__button--inner'>Назад</span>
            </button>
          </div>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>,document.body
  );
}