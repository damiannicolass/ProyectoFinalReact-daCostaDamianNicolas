import { Col, Row, Container } from 'react-bootstrap';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col className='columna'>
                    <strong>NAVEGACIÓN</strong>
                    <Link to="/categoria/stickers" className='link-footer'>STICKERS</Link>
                    <Link to="/categoria/estampados" className='link-footer'>ESTAMPADOS</Link>
                    <Link to="/categoria/papeleria" className='link-footer'>PAPELERIA</Link>
                    <Link to="/categoria/cuadro" className='link-footer'>CUADROS</Link>
                </Col>
                <Col className='columna'>
                    <strong>CONTACTANOS</strong>
                    <p>
                        <i className="bi bi-telephone-fill"></i> 1122334455
                    </p>
                    <p>
                        <i className="bi bi-envelope-fill"></i> bezier.disenio@gmail.com
                    </p>
                </Col>
                <Col className='columna'>
                    <strong>REDES SOCIALES</strong>
                    <p>
                        <a className='link-redes' href="https://www.instagram.com/bezier.dg/"><i className="bi bi-instagram"></i> Instagram</a>
                    </p>
                    <p>
                        <a className='link-redes' href="https://www.facebook.com/profile.php?id=61551068675296"><i className="bi bi-facebook"></i> Facebook</a>
                    </p>
                    <p>
                        <a className='link-redes' href="https://www.tiktok.com/@bezier.dg"><i className="bi bi-tiktok"></i> Tiktok</a>
                    </p>
                </Col>
            </Row>
            <hr className='p-0 m-0' />
            <Row>
                <Col>
                    Creado por <img src='/img/logo.png' className='logo-creado' alt="logo" />
                </Col>
                <Col>
                    <p className='copy'>Copyright Bezier - 2024. Todos los derechos reservados.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
