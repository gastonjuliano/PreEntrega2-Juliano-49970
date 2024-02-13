import { Link } from "react-router-dom";
import { Container, Grid, Button } from "@mui/material";

import products from "../../utils/products.json";

export default function Productos() {
    const addProductToCart = (event) => {
        const productId = event.target.parentElement.getAttribute("productid");
        const product = products[productId - 1];

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(product);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };
	
	return (
		<Container disableGutters>
			<Grid
				sx={{ flexGrow: 1 }}
				spacing={2}
				container
				width="100%"
				justifyContent="space-evenly"
			>
				{products.map((product) => (
					<Grid
						item
						key={product.id}
						productid={product.id}
						maxWidth="500px"
						maxHeight="400px"
						paddingBottom={"100px"}
					>
						<Link to={`/productos/${product.id}`}>
							<h2>{product.name}</h2>
							<img
								src={`${product.img}`}
								width={"100%"}
								height={"100%"}
								alt="image"
							/>
						</Link>
						<Button
							sx={{ color: "white" }}
							variant="outlined"
							onClick={addProductToCart}
						>
							Agregar al Carrito
						</Button>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
