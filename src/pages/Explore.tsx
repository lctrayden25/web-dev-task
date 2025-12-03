import Layout from "@/components/Layout";
import { useSearchParams } from "react-router-dom";

const Explore = () => {
	const [searchParams] = useSearchParams();
	const searchText = searchParams.get("searchText");

	return (
		<Layout>
			<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
				{!searchText ? "Explore Now" : `Search Result for ${searchText}: 0`}
			</div>
		</Layout>
	);
};

export default Explore;
