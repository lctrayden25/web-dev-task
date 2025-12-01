import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const ResourceDetail = () => {
	const { id } = useParams();
	return <Layout>resource detail id: {id}</Layout>;
};

export default ResourceDetail;
