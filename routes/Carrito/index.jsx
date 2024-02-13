import { Typography, Container } from "@mui/material";

export default function Carrito() {
	const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

	const carritoWithCuantities = carrito.reduce((acc, product) => {
		const existingProduct = acc.find((p) => p.id === product.id);
		if (existingProduct) {
			existingProduct.quantity += 1;
		} else {
			acc.push({ ...product, quantity: 1 });
		}
		return acc;
	}, []);

	return (
		<div>
			<h1>Carrito</h1>
			<Container maxWidth={false} disableGutters>
				{carritoWithCuantities.map((product) => (
					<div key={product.id}>
						<Typography>Producto: {product.name}</Typography>
						<Typography>Cantidad: {product.quantity}</Typography>
						<img width={250} src={`${product.img}`} alt="image"></img>
					</div>
				))}
			</Container>
		</div>
	);
}
