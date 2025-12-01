import productSectionBg from "@/assets/images/product-section-bg.png";

const ProductSection = () => {
	return (
		<div
			className="relative py-[70px] px-[80px] w-full bg-cover bg-center"
			style={{ backgroundImage: `url(${productSectionBg})` }}
		>
			<p className="text-lg">
				We're here to help you find the perfect adventure for you.
			</p>
		</div>
	);
};

export default ProductSection;
