
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Layout>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido/a a INTEGRALOG!!"/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/category/:categoria" element={<ItemListContainer greeting="Servicios"/>}/>
          <Route path="*" element={<h1>Página No Encontrada</h1>} />
        </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App;
