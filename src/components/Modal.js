import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './';

export const Modal = ({ cancelAction, cancelText, children, className, inline, okayAction, okayText, title }) => (
    <div className={`modal ${className} ${inline ? 'inline' : ''}`}>
        {title && <div className="title">{title}</div>}
        <div className="content">
            {children}
        </div>
        {(cancelText || okayText) && (
            <div className="buttons">
                {cancelText && <Button onClick={cancelAction}>{cancelText}</Button>}
                {okayText && <Button onClick={okayAction}>{okayText}</Button>}
            </div>
        )}
    </div>
);

Modal.propTypes = {
    cancelAction: PropTypes.func,
    cancelText: PropTypes.string,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
    okayAction: PropTypes.func,
    okayText: PropTypes.string,
    title: PropTypes.string
};

Modal.defaultProps = {
    cancelAction: () => null,
    cancelText: null,
    className: '',
    inline: false,
    okayAction: () => null,
    okayText: null,
    title: null
};

export default Modal;
