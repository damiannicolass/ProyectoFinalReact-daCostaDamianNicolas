/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const [alertaVisible, setAlertaVisible] = useState(false);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, itemAgregado]);
        }

        setAlertaVisible(true);
        setTimeout(() => {
            setAlertaVisible(false);
        }, 3000); 
    };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
            {children}

            {alertaVisible && (
                <div className="position-fixed top-0 end-0 p-5 mt-3" >
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Producto agregado al carrito.
                        <button type="button" className="btn-close" onClick={() => setAlertaVisible(false)}></button>
                    </div>
                </div>
            )}
        </CartContext.Provider>
    );
};
