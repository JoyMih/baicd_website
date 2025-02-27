// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blog from "./pages/blog";
import Cast from "./pages/cast";
import Check from "./pages/check";
import Media from "./pages/media";
import Tickets from "./pages/tickets";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/blog"
					element={<Blog />}
				/>
				<Route
					path="/cast"
					element={<Cast />}
				/>
				<Route path="/check" element={<Check />} />
				<Route path="/media" element={<Media />} />
				<Route
					path="/tickets"
					element={<Tickets />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
