import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import bannerImage from "./assets/meals.jpg"
import MealsList from "./components/Meals/MealsList"
import CartContext from "./store/CartContext"
import { useContext,useState } from "react"
import Modal from "./components/Modal/Modal"
import CartItemsList from "./components/CartItems/CartItemsList"

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const App = () => {

  const [cartVisible,setCartVisibility] = useState(false)
  const cartCtx = useContext(CartContext)

  const showCartHandler = () => {
    setCartVisibility(true)
  }

  const hideCartHandler = () => {
    setCartVisibility(false)
  }

  const getCartItems = () => {
    return cartCtx.cartItems.map((val)=>{
      for(let meal of DUMMY_MEALS){
        if(meal.id === val.id) return {id:val.id,quantity:val.quantity,name:meal.name,price:meal.price}
      }
    });
  }

  return (
    <>
      <Header 
        title="React Meals" 
        cartButtonTitle="Your Cart"
        cartItemsCount={cartCtx.cartItems.length}
        onShowCart={showCartHandler}
      />
      <Banner 
        image={bannerImage} 
        title="Delicious Food, Delivered To You"
        description={
          <>
            <p>
              Choose your favorite meal from our broad selection of available meals
              and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
              All our meals are cooked with high-quality ingredients, just-in-time and
              of course by experienced chefs!
            </p>
          </>
        } />
        <MealsList items={DUMMY_MEALS} /> 
        { cartCtx.cartItems.length > 0 && cartVisible ?
        <Modal onHideModal={hideCartHandler}>
          <CartItemsList items={getCartItems()} />
        </Modal>
        : null }
    </>
  );
}

export default App;
