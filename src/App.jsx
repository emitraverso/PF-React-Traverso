
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './contexts/CartProvider';
import CartContainer from './components/CartContainer/CartContainer';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        
        <Layout>

          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido/a a INTEGRALOG!!" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer greeting="Servicios" />} />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<h1>Página No Encontrada</h1>} />
            
          </Routes>

        </Layout>
    
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
