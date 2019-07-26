import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import headphone from "./headphone.json"

import Product from "./components/Product.tsx"

function App() {
  return (
    <div className="App">
      <Product
        product={headphone}
      ></Product>
    </div>
  );
}

export default App;
