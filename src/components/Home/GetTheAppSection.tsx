import CustomImage from "../CustomImage";
import appleStore from "@/assets/icon/apple.png";
import googlePlay from "@/assets/icon/google.png";
import { Link } from "react-router-dom";

const GetTheAppSection = () => {
	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col md:flex-row gap-[24px] md:gap-[50px] lg:gap-[107px] items-center justify-center">
				<div className="max-w-[475px]">
					<CustomImage src={undefined} alt="get the app" />
				</div>
				<div className="flex flex-col gap-[24px]">
					<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
						Get the app
					</h2>
					<p className="text-[16px]">
						Get the app and stay connected to your friends and family back home
						in South Africa.
					</p>
					<div className="flex gap-[10px]">
						<Link to="https://www.apple.com/app-store/" target="_blank">
							<CustomImage
								src={appleStore}
								alt="apple store"
								className="w-[141px] h-[42px]"
							/>
						</Link>
						<Link to="https://play.google.com/store/apps/" target="_blank">
							<CustomImage
								src={googlePlay}
								alt="google play"
								className="w-[141px] h-[42px]"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetTheAppSection;
