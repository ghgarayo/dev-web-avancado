import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Planos from "./pages/planos";
import Sobre from "./pages/sobre";
import Detalhes from "./pages/detalhes";
import NotFound from "./pages/notfound";

export default function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="planos" element={<Planos />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="detalhes/:filme" element={<Detalhes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
