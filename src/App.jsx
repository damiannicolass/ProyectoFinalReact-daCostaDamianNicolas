import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { CartProvider } from "./context/CartContext";
import Carrito from './components/Carrito';
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <div className="flex-grow-1">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:productId" element={<ItemDetailContainer />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/productos/:categoria" element={<ItemListContainer />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
