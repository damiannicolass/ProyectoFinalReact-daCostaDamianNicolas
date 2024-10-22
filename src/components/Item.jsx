/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Card className="m-2 card-class">
            <Card.Img variant="top" src={product.img} alt={product.name} />
            <Card.Body className='text-card d-flex flex-column justify-content-between p-3'>
                <div>
                    <p>{product.name.toUpperCase()}</p> 
                    <Card.Text as="div">
                        ${product.price.toString().toUpperCase()} 
                    </Card.Text>
                </div>
                <div className='m-3'>
                    <Link to={`/item/${product.id}`}>
                        <button className='btn btn-outline-light btn-sm w-100'>Ver más</button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Item;
