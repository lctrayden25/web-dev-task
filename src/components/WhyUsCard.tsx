type WhyUsCardProps = {
	id: string;
	title: string;
	description: string;
	icon: string;
};

const WhyUsCard = ({ title, description, icon, id }: WhyUsCardProps) => {
	return (
		<div
			key={id}
			className="bg-white p-[20px] rounded-[8px] flex flex-col gap-[15px] border border-[#BFC8D0]"
		>
			<img
				src={icon}
				alt={title}
				className="w-full h-full max-w-[40px] max-h-[40px]"
			/>
			<h3 className="text-lg font-bold">{title}</h3>
			<p className="text-sm text-gray-500 text-[14px]">{description}</p>
		</div>
	);
};

export default WhyUsCard;
