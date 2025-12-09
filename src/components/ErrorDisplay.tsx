const ErrorDisplay = ({ message }: { message?: string | null }) => {
	return (
		<div className="flex items-center justify-center min-h-[20vh] bg-amber-50 text-2xl font-bold">
			{message || "Something went wrong"}
		</div>
	);
};

export default ErrorDisplay;
