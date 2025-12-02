import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Help from "./pages/Help";
import Packages from "./pages/Packages";
import ResourceDetail from "./pages/ResourceDetail";
import { useTranslation } from "react-i18next";
import { Language } from "./utils/constant";
import ProductDetail from "./pages/ProductDetail";

const LocalizedRoutes = () => {
	const { locale } = useParams<{ locale: Language }>();
	const { i18n } = useTranslation();
	const location = useLocation();
	const pathname = location.pathname?.split("/");
	const supportedLngs = Object.keys(i18n.services.resourceStore.data);

	// append the locale to the path if it is not supported
	if (!supportedLngs.includes(locale as Language as string)) {
		// console.log({ slicePath: pathname.slice(1, pathname.length) });
		const newPathname = pathname.slice(1, pathname.length)?.join("/");
		const appendLocalePath = `/${i18n?.language}/${newPathname}${location?.search}`;

		return <Navigate to={appendLocalePath} replace />;
	}

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/explore" element={<Explore />} />
			<Route path="/help" element={<Help />} />
			<Route path="/packages" element={<Packages />} />
			<Route path="/resource/:resourceId" element={<ResourceDetail />} />
			<Route path="/product/:productId" element={<ProductDetail />} />
		</Routes>
	);
};

function App() {
	const { i18n } = useTranslation();

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Navigate to={`/${i18n.language}/`} replace />}
				/>
				<Route path="/:locale/*" element={<LocalizedRoutes />} />
			</Routes>
		</>
	);
}

export default App;
