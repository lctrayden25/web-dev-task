import { dummyResourceData } from "@/utils/mock/resourceData";
import CustomImage from "../CustomImage";
import { Link } from "react-router-dom";

const ResourceSection = () => {
	const data = dummyResourceData;
	return (
		<div className="relative py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col gap-[24px]">
				<h2 className="font-bold text-[32px]">
					{"Useful resources from our blog"}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{(data ?? [])?.map((item) => (
						<div
							key={item.id}
							className="bg-[#F8FAFD] p-[20px] rounded-[10px] flex flex-col gap-[15px]"
						>
							<h3 className="text-lg font-bold">{item.title}</h3>
							<CustomImage src={undefined} alt={item.title} />
							<p className="text-[14px]">{item.description}</p>
							<Link
								to={`/resource/${item.id}`}
								className="text-[14px] hover:underline"
							>
								READ MORE
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResourceSection;
