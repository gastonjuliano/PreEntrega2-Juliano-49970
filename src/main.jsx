import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Carrito from "../routes/Carrito";
import Contacto from "../routes/Contacto";
import Layout from "../components/Layout";
import Productos from "../routes/Productos";
import Producto from "../routes/Productos/Producto/index.jsx";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				key: "home",
				path: "/",
				element: <App />,
			},
			{
				key: "carrito",
				path: "/carrito",
				element: <Carrito />,
			},
			{
				key: "productos",
				path: "/productos",
				element: <Productos />,
			},
			{
				key: "producto",
				path: "/productos/:productId",
				element: <Producto />,
			},
			{
				key: "contacto",
				path: "/contacto",
				element: <Contacto />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
