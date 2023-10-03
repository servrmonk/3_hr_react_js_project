import React, { useState } from "react";
import "../styling/ViewProduct.css";
import Cart from "./Cart";

console.log("Hello from viewproduct");

const ViewProduct = (props) => {
  const products = props.appData || [];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCart = (product, itmSize) => {
    const selectedItem = {
      product,
      itmSize
    };

    setSelectedItems([...selectedItems, selectedItem]);
  };

  return (
    <div>
      <div className="ViewProduct">
        {products.map((product, index) => (
          <div key={index}>
            <p>Shoe Name: {product.shoename}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>

            <button onClick={() => handleCart(product, product.sizes.s)}>
              Buy Small ({product.sizes.s})
            </button>
            <button onClick={() => handleCart(product, product.sizes.m)}>
              Buy Medium ({product.sizes.m})
            </button>
            <button onClick={() => handleCart(product, product.sizes.l)}>
              Buy Large ({product.sizes.l})
            </button>
          </div>
        ))}
      </div>
      <Cart selectedItems={selectedItems} /> {/* Pass selected items to Cart */}
    </div>
  );
};

export default ViewProduct;
