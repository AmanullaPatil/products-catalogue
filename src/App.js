import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PageNotFound, Cart, Product, Products, About, Contact, Ca } from "./pages"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
