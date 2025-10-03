import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ActividadesPage from './pages/servicios/ActividadesPage';
import ArtePage from './pages/servicios/ArtePage';
import ExcursionesPage from './pages/servicios/ExcursionesPage';
import AlmuerzosPage from './pages/servicios/AlmuerzosPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/actividades" element={<ActividadesPage />} />
        <Route path="/servicios/arte" element={<ArtePage />} />
        <Route path="/servicios/excursiones" element={<ExcursionesPage />} />
        <Route path="/servicios/almuerzos" element={<AlmuerzosPage />} />
      </Routes>
    </Layout>
  );
}

export default App;