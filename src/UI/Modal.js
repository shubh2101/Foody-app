import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </React.Fragment>
  )
}

export default Modal;
