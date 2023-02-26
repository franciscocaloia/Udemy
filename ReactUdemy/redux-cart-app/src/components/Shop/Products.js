import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "product1",
    price: 10,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "product2",
    price: 8,
    description: "This is the second product - amazing!",
  },
];
const Products = () => {
  const productList = DUMMY_PRODUCTS.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
