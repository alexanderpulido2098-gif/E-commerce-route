import { BrowserRouter, Routes, Route } from "react-router";
import LayoutCLasic from "../layouts/layoutclasic";


import HomePage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import ProdottiPage from "./components/Prodotti";
import NotFoundPage from "./pages/Notfoundpage";
import ProdottoSingle from "./components/prodottosingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LayoutCLasic}>
          <Route path="/" Component={HomePage} />
          <Route path="/About" Component={AboutPage} />
          <Route path="/Prodotti" Component={ProdottiPage} />
          <Route path="/Prodotto/:id" Component={ProdottoSingle} />
          <Route path="*" Component={NotFoundPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
