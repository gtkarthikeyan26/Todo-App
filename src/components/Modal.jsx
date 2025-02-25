import React, { useRef } from 'react'
import { createPortal } from 'react-dom';
import { useImperativeHandle } from 'react';
import { Button } from './Button';

export default function Modal({children,buttonName,ref}) {
    const dialog = useRef()
    useImperativeHandle(ref,()=> {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    // Check if the modal-root exists before creating the portal
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        console.error("Error: Target container is not a DOM element.");
        return null; // Return null if modal-root is not found
    }

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right"><Button>{buttonName}</Button></form>
        </dialog>,
        modalRoot
    );
}
