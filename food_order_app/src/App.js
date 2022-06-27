import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import bannerImage from "./assets/meals.jpg"
import MealsList from "./components/Meals/MealsList"
import { useContext } from "react"
import Modal from "./components/Modal/Modal"
import CartItemsList from "./components/CartItems/CartItemsList"
import Context from "./store/Context"

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

  const ctx = useContext(Context)

  const showCartHandler = () => {
    if(ctx.cartItems.length > 0){
      ctx.onModalState(true)
    }
  }

  const getCartItems = () => {
    return ctx.cartItems.map((val)=>{
      for(let meal of DUMMY_MEALS){
        if(meal.id === val.id) return {id:val.id,quantity:val.quantity,name:meal.name,price:meal.price}
      }
      return null
    });
  }

  const countCartItems = () => {
    let count = 0
    ctx.cartItems.forEach((val)=>count += Number(val.quantity))
    return count
  }

  return (
    <>
      <Header 
        title="React Meals" 
        cartButtonTitle="Your Cart"
        cartItemsCount={countCartItems()}
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
        <main>
          <MealsList items={DUMMY_MEALS} /> 
        </main>
        <Modal onHideModal={ctx.onModalState.bind(false)} visible={ctx.cartItems.length > 0 && ctx.modalVisible}>
          <CartItemsList items={getCartItems()} />
        </Modal>
    </>
  );
}

export default App;
