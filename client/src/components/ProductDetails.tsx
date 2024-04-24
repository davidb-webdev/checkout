import useProduct from "../hooks/useProduct";
import AddToCartButton from "./AddToCartButton";

interface IProductDetailsProps {
  productId: string;
}

const ProductDetails = ({ productId }: IProductDetailsProps) => {
  const product = useProduct(productId);

  return (
    <>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.images[0]} alt={product.name} />
          <p>{product.default_price.unit_amount / 100} kr</p>

          <AddToCartButton
            productId={product.id}
            priceId={product.default_price.id}
            name={product.name}
          />
        </>
      ) : (
        <p>Could not find product</p>
      )}
    </>
  );
};

export default ProductDetails;
