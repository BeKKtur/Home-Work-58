import React from 'react';

interface BackdropProps {
    show: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({show}) => {
    return (
        <div>
            <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
        </div>
    );
};

export default Backdrop;