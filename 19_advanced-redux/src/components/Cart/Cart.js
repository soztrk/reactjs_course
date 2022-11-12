import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux"

const Cart = (props) => {

  const cartItems = useSelector(state=>state.cart.items)

  let totalPrice = 0

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { 
        cartItems.map((item,index)=>{
          let innerTotal = item.quantity*item.price
          totalPrice += innerTotal
          return <CartItem key={index}
          item={{id:item.id, title: item.name, quantity: item.quantity, total:innerTotal , price: item.price }}
        />
        })}
      </ul>
      <div>Total: ${Number(totalPrice).toFixed(2)}</div>
    </Card>
  );
};

export default Cart;
