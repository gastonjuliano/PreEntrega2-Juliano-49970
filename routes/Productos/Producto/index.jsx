import { useParams } from "react-router-dom";
import products from "../../../utils/products.json";


export default function Producto() {
    let params = useParams();
    const productId = params.productId;
    const product = products[productId - 1];

    const addProductToCart = (e) => {
        const product = products[productId - 1];

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(product);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    return (
        <>
            <h2>{product.name}</h2>
            <img src={`${product.img}`} alt="image"></img>
            <p>{product.description}</p>
            <button onClick={addProductToCart}>Agregar al Carrito</button>
        </>
    );
}
