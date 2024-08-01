import { forwardRef } from 'react';

const Modal = forwardRef(
     ({ children, modalBoxClassName, onBackdropClick }, ref) => {
          return (
               <dialog
                    ref={ref}
                    className='modal'
                    onClick={() => {
                         onBackdropClick && onBackdropClick();
                    }}
               >
                    <div
                         className={`modal-box ${modalBoxClassName ?? ''} `}
                         onClick={(e) => e.stopPropagation()}
                    >
                         {children}
                    </div>

                    <form method='dialog' className='modal-backdrop'>
                         <button
                              type='button'
                              onClick={(e) => {
                                   e.stopPropagation();
                                   onBackdropClick && onBackdropClick();
                              }}
                         ></button>
                    </form>
               </dialog>
          );
     }
);

export default Modal;
