import React from 'react';
import Backdrop from "./Backdrop";

interface ModalProps extends React.PropsWithChildren{
    show: boolean;
    title: React.ReactNode;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({show,title,onClose ,children}) => {
    return (
        <>
            <Backdrop show={show}/>
            <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
                <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="modal-content modal-body">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            {children}
                        </div>
                        Modal content
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;