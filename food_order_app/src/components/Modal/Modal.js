import ReactDOM from "react-dom"
import Card from '../../parts/Card/Card';
import Button from '../../parts/Button/Button';
import classes from './Modal.module.css';

const OverlayModal = (props) => {

  const hideModalHandler = () => {
    props.onHideModal()
  }

  return(
    <>
      <div className={classes.backdrop} onClick={hideModalHandler} />
      <Card className={classes.modal}>
        <div>
          {props.children}
        </div>
        <footer className={classes.actions}>
          <Button onClick={hideModalHandler}>Close</Button>
          <Button onClick={()=>{console.log("ordering")}}>Order</Button>
        </footer>
      </Card>
    </>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverlayModal
          onHideModal={props.onHideModal} 
          visible={props.visible}
          onConfirm={props.onConfirm}>
          {props.children}
        </OverlayModal>,
        document.getElementById("overlay-root"))}
    </>
  )
};

export default Modal;
