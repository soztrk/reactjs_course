import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import { useDispatch } from 'react-redux/es/exports';

const CartButton = (props) => {

  const dispatch = useDispatch()

  return (
    <button className={classes.button} onClick={()=>dispatch(uiActions.toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
