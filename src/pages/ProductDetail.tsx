import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const { productId } = useParams<{ productId: string }>();
	return <Layout>ProductDetail: {productId}</Layout>;
};

export default ProductDetail;
