import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function CardWidget() {
	const [carritoCount, setCarritoCount] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCarritoCount(
				JSON.parse(localStorage.getItem("carrito"))
					.map((p) => p.quantity || 1)
					.reduce((partialSum, a) => partialSum + a, 0)
			);
		}, 500);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<Badge badgeContent={carritoCount} color="warning">
			<IconButton sx={{ p: 0 }}>
				<ShoppingCartOutlinedIcon style={{ color: "white" }} fontSize="large" />
			</IconButton>
		</Badge>
	);
}
