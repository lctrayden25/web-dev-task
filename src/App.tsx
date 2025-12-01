import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Help from "./pages/Help";
import Packages from "./pages/Packages";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/help" element={<Help />} />
				<Route path="/packages" element={<Packages />} />
			</Routes>
		</>
	);
}

export default App;
