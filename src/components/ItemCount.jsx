/* eslint-disable react/prop-types */

import './ItemCount.css'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar }) => {
    

    return (
        <>
            <div className="item-count">
                <button className="button-agregar-carrito" onClick={handleRestar}>-</button>
                <p className="p-cantidad">{cantidad}</p>
                <button className="button-agregar-carrito" onClick={handleSumar}>+</button>
            </div>
            <button className="button-agregar-carrito" onClick={handleAgregar} >AGREGAR AL CARRITO</button>
        </>
    )
}
export default ItemCount;