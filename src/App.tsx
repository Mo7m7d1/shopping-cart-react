import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
export default function App() {
	return (
		<ShoppingCartProvider>
			<Navbar />
			<Container className="mb-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Container>
		</ShoppingCartProvider>
	);
}
