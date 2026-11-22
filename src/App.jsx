
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import ProdottiPage from "./pages/Prodottipage";
import NotFoundPage from "./pages/Notfoundpage";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/About" Component={AboutPage} />
        <Route path="/Prodotti" Component={ProdottiPage} />
        <Route path="*" Component={NotFoundPage} />

      </Routes>
    </BrowserRouter>


  )


}

export default App
