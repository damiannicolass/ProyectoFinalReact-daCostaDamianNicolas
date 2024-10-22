/* eslint-disable react-hooks/rules-of-hooks */
import { Col, Container, Row, Spinner } from "react-bootstrap";
import './ItemDetail.css';
import { FaLock } from 'react-icons/fa';
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

/* eslint-disable react/prop-types */
const ItemDetail = ({ item }) => {
    if (!item) {
        return (
            <Container className="d-flex justify-content-center  spinner">
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    const { agregarAlCarrito } = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }


    return (
        <Container className="container-detail">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} className="col-img">
                    <img className="detail-img" src={item.img} alt={item.name} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h3>{item.name}</h3>
                    <p className="precio"><strong>${item.price.toString()}</strong></p>
                    <p className="descripcion">{item.description}</p>
                    <p className="descuento"><strong>5% DE DESCUENTO</strong> PAGANDO CON TRANSFERENCIA</p>
                    <a href="" className="link-medios-pago">VER MEDIOS DE PAGO</a>
                    <hr />
                    <ItemCount cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => {agregarAlCarrito(item, cantidad) } } />
                    <Container className="mt-4">
                        <div className="compra-protegida">
                            <FaLock />
                            <p className="p-0 m-0"><strong>Compra protegida</strong></p>
                        </div>
                        <p>Tus datos cuidados durante toda la compra.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;
