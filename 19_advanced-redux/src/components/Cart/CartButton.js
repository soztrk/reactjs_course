import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {

  const items = useSelector(state=>state.cart.items)
  const dispatch = useDispatch()

  const countItmes = () => {
    let itemsCount = 0
    items.forEach(val=>{
      itemsCount += val.quantity
    })
    return itemsCount
  }

  return (
    <button className={classes.button} onClick={()=>dispatch(uiActions.toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{countItmes()}</span>
    </button>
  );
};

export default CartButton;
