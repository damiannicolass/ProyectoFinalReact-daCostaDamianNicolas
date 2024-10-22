/* eslint-disable react/prop-types */
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Item from './Item'; 
import './ItemList.css'

const ItemList = ({ products }) => {
    if (!products || products.length === 0) {
        return (
            <Container>
                <div className='text-center'>
                    <Spinner className='spinner-inicio' animation="border" variant="primary" />
                </div>
            </Container>
        );
    }

    return (
        <Container className='mt-5'>
            <div>
                <h1 className='py-4 text-center'><strong>PRODUCTOS</strong></h1>
            </div>
            <Row>
                {products.map((product) => (
                    <Col xs={6} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4" key={product.id}>
                        <Item product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;
