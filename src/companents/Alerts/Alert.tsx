import React from 'react';
import Close from "../Close";
interface AlertProps extends React.PropsWithChildren {
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void
}

const Alert: React.FC<AlertProps>= ({type, onDismiss ,children}) => {
    return (
        <>
            <div className={`alert alert-${type} mt-5 alert-dismissible`} role="alert" style={{margin: '0 60px',}} onClick={onDismiss}>
                {children}
                {onDismiss ? <Close/> : undefined}
            </div>

        </>

    );
};

export default Alert;