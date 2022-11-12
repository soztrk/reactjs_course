import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;

  const dispatch = useDispatch()

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity*price).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(cartActions.removeItemFromCart(id))}>-</button>
          <button onClick={()=>dispatch(cartActions.addItemToCart({id:id}))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
