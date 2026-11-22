
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import ProdottiPage from "./pages/Prodottipage";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/About" Component={AboutPage} />
        <Route path="/Prodotti" Component={ProdottiPage} />


      </Routes>
    </BrowserRouter>


  )


}

export default App
