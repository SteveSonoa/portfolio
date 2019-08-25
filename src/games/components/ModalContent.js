import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./ModalContent.css";

export class ModalContent extends Component {
    static propTypes = {
        handleClose: PropTypes.func,
        className: PropTypes.string
    }

    static defaultProps = {
        handleClose: () => {},
        className: null
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener(
            "mousedown",
            this.handleOutsideClick
        );
    }

    handleOutsideClick = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.handleClose(event);
        }
    };

    render() {
        const { handleClose, className, children } = this.props;

        let allClassNames = 'modal-main';
        if(className) {
            allClassNames += ` ${className}`;
        }

        return (
            <div
                className="modal-content display-block"
            >
                <section className={allClassNames} ref={node => (this.wrapperRef = node)}>
                    {children}
                    <button onClick={handleClose}>Close</button>
                </section>
            </div>
        );
    }
}

export default ModalContent;
