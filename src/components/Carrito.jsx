import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import './Carrito.css';
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, cantidadEnCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <>
            <Container className="contenedor-carrito">
                <Row>
                    <Col md={7} className="p-4">
                        <h3 className="h3-carrito">TU CARRITO</h3>
                        {
                            carrito.map((prod) => (
                                <div key={prod.id}>
                                    <Card className="my-3 shadow">
                                        <Row className="g-0">
                                            <Col md={4}>
                                                <Card.Img
                                                    src={prod.img}
                                                    alt="Imagen"
                                                    className="img-fluid"
                                                />
                                            </Col>
                                            <Col md={8}>
                                                <Card.Body>
                                                    <h3>{prod.name}</h3>
                                                    <p>Precio cada uno: ${prod.price}</p>
                                                    <p>Cantidad: {prod.cantidad}</p>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            ))
                        }
                    </Col>
                    <Col md={5} className="p-4">
                        {carrito.length > 0 ? (
                            <>
                                <Link to="/checkout"><button className="button-carrito w-100">Ir a pagar</button></Link>
                                <p className="pt-5"><strong>RESUMEN DEL PEDIDO</strong></p>
                                <p>{cantidadEnCarrito()} {cantidadEnCarrito() === 1 ? 'Producto' : 'Productos'}</p>
                                <p className="py-1"><strong>Precio Total: ${precioTotal()}</strong></p>
                                <p className="m-0 opciones-pago">OPCIONES DE PAGO</p>
                                <img src="img/mp.png" alt="" className="img-mp" />
                                <img src="img/visa.png" alt="" className="img-mp mx-3" />
                                <img src="img/master.png" alt="" className="img-master" />
                                <div className="my-4">
                                    <button onClick={handleVaciar} className="button-carrito">Vaciar</button>
                                </div>
                            </>
                        ) : (
                            <p>El carrito está vacío</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Carrito;
