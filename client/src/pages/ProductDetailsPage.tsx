import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  return (
    <>
			<h1>Product details</h1>
      {productId ? <ProductDetails productId={productId} /> : <p>Product not found</p>}
    </>
  );
};

export default ProductDetailsPage;
