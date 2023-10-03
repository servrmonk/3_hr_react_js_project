import React, { useState } from "react";
import ViewProduct from "./ViewProduct";
import "../styling/AddProduct.css";

const AddProduct = (props) => {
  const [inputData, setInputData] = useState({
    shoename: "",
    description: "",
    price: "",
    s: 0,
    m: 0,
    l: 0
  });
  const [view, showView] = useState(false);
  const changeState = (products) => {
    // showView(true);
    if (!view) {
      showView(true);
    }
    // console.log("view inside changestate fun", view);
    // console.log("Products inside changestate", products);
  };
  // console.log("view outside changestate fun", view);

  const [products, setProducts] = useState([]); // array to store multiple products

  const handleData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      shoename: inputData.shoename,
      description: inputData.description,
      price: inputData.price,
      sizes: {
        s: inputData.s,
        m: inputData.m,
        l: inputData.l
      }
    };

    
    const isDuplicate = products.some((product) =>
      isSameProduct(product, newProduct)
    );

    if (isDuplicate) {
      
      alert("This product already exists!");
    } else {
      
      setProducts([...products, newProduct]);

      
      setInputData({
        shoename: "",
        description: "",
        price: "",
        s: 0,
        m: 0,
        l: 0
      });
    }
  };

  
  const isSameProduct = (product1, product2) => {
    return (
      product1.shoename === product2.shoename &&
      product1.description === product2.description &&
      product1.price === product2.price &&
      product1.sizes.s === product2.sizes.s &&
      product1.sizes.m === product2.sizes.m &&
      product1.sizes.l === product2.sizes.l
    );
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="name">
          <label>ShoeName: </label>
          <input
            className="input"
            name="shoename"
            type="text"
            value={inputData.shoename}
            required
            onChange={handleData}
          />
        </p>
        <p className="name">
          <label>Description: </label>
          <input
            className="input"
            type="text"
            name="description"
            value={inputData.description}
            required
            onChange={handleData}
          />
        </p>
        <p className="name">
          <label>Price: </label>
          <input
            className="input"
            name="price"
            value={inputData.price}
            type="number"
            required
            onChange={handleData}
          />
        </p>
        <p className="name">
          Size:
          <input
            type="number"
            name="s"
            value={inputData.s}
            className="size"
            placeholder="S"
            required
            onChange={handleData}
          />
          <input
            type="number"
            name="m"
            value={inputData.m}
            className="size"
            placeholder="M"
            required
            onChange={handleData}
          />
          <input
            type="number"
            name="l"
            value={inputData.l}
            className="size"
            placeholder="L"
            required
            onChange={handleData}
          />
          <button
            type="submit"
            className="AddProduct"
            onClick={() => changeState(products)}
          >
            Add Product ({products.length})
          </button>
        </p>
      </form>

      {view && <ViewProduct key={Math.random()} appData={products} />}
    </div>
  );
};

export default AddProduct;
