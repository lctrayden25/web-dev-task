import { cn } from "@/utils/helper";
import placeholderImage from "@/assets/images/placeholder.png";

type CustomImageProps = {
	src?: string;
	alt?: string;
	className?: string;
};

const CustomImage = ({
	src,
	alt,
	className,
	...props
}: CustomImageProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
	return (
		<img
			loading="eager"
			src={src || placeholderImage}
			alt={alt || "placeholder"}
			className={cn("w-full h-full object-cover", className)}
			{...props}
		/>
	);
};

export default CustomImage;
