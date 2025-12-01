import Layout from "@/components/Layout";
import React from "react";
import { useParams } from "react-router-dom";

const ResourceDetail = () => {
	const { id } = useParams();
	return <Layout>resource detail id: {id}</Layout>;
};

export default ResourceDetail;
