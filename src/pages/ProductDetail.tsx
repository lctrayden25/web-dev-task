import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const { productId } = useParams<{ productId: string }>();
	return (
		<Layout>
			<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
				ProductDetail: {productId}
			</div>
		</Layout>
	);
};

export default ProductDetail;
