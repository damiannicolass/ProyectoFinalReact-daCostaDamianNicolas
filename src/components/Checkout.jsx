import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import './Checkout.css'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
        })
    }

    if (pedidoId) {
        return (
            <Container className="mt-5 pt-5">
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <Alert variant="success">
                            <h1>¡Muchas gracias por tu compra!</h1>
                            <p>Tu número de pedido es: <strong>{pedidoId}</strong></p>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container className="py-3">
            <Card className="mt-5 p-3 shadow">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Finalizar compra</h2>
                    <Form onSubmit={handleSubmit(comprar)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingresa tu nombre" 
                                {...register("nombre", { required: true })} 
                            />
                            {errors.nombre && <span className="text-danger">El nombre es obligatorio</span>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingresa tu mail" 
                                {...register("email", { 
                                    required: true, 
                                    pattern: /^\S+@\S+$/i 
                                })} 
                            />
                            {errors.email && <span className="text-danger">El email es obligatorio.</span>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Ingresa tu celular" 
                                {...register("telefono", { required: true })} 
                            />
                            {errors.telefono && <span className="text-danger">El teléfono es obligatorio.</span>}
                        </Form.Group>

                        <Button className="button-comprar" type="submit">
                            Comprar
                        </Button>
                    </Form>
                </Col>
                </Row>
                </Card>
        </Container>
    );
}

export default Checkout;
