import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const ResourceDetail = () => {
	const { resourceId } = useParams<{ resourceId: string }>();
	return (
		<Layout>
			<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
				resource detail id: {resourceId}
			</div>
		</Layout>
	);
};

export default ResourceDetail;
