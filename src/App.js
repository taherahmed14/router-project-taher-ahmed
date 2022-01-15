import './App.css';
import { Landing } from './components/Landing';
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from './components/ProductDetails';
import { Products } from './components/Products';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
