import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const ResourceDetail = () => {
	const { resourceId } = useParams<{ resourceId: string }>();
	return <Layout>resource detail id: {resourceId}</Layout>;
};

export default ResourceDetail;
