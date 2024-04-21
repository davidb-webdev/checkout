import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import StyledCardList from "../styled/StyledCardList";
import AddToCartButton from "./AddToCartButton";

const ProductList = () => {
  const products = useProducts();

  return (
    <StyledCardList>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.name} />
            </Link>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <span>{product.default_price.unit_amount / 100} kr</span>

            <AddToCartButton
              productId={product.id}
              priceId={product.default_price.id}
              name={product.name}
            />
          </div>
        ))
      ) : (
        <p>Could not find any products</p>
      )}
    </StyledCardList>
  );
};

export default ProductList;
