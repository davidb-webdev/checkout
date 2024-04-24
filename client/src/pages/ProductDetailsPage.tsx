import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  return (
    <>
      {productId ? (
        <ProductDetails productId={productId} />
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default ProductDetailsPage;
