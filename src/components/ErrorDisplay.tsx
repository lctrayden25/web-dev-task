const ErrorDisplay = ({ message }: { message?: string | null }) => {
	return (
		<div className="flex items-center justify-center">
			{message || "Something went wrong"}
		</div>
	);
};

export default ErrorDisplay;
