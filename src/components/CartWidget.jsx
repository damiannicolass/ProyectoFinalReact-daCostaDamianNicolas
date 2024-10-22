import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <>
        <div className="cart-widget">
            <Link to="/carrito"><FaShoppingCart size={24} /></Link>
        </div>
            <p className='p-carrito'>{cantidadEnCarrito()}</p>
        </>
    );
}

export default CartWidget;
