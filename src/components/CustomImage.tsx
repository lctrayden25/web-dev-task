import { cn } from "@/utils/helper";
import placeholderImage from "@/assets/images/placeholder.png";

type CustomImageProps = {
	src?: string;
	alt?: string;
	className?: string;
};

const CustomImage = ({ src, alt, className }: CustomImageProps) => {
	return (
		<img
			src={src || placeholderImage}
			alt={alt || "placeholder"}
			className={cn("w-full h-full object-cover", className)}
		/>
	);
};

export default CustomImage;
