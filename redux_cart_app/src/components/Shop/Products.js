import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:"p1",
    price:6,
    name:"First Book",
    desc:"The first book that I wrote."
  },
  {
    id:"p2",
    price:7,
    name:"Second Book",
    desc:"The second book that I wrote."
  }
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((val,index)=>{
          return <ProductItem
            key={index}
            id={val.id}
            name={val.name}
            price={val.price}
            description={val.desc}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
