import React from "react";
import "../styling/Cart.css";

const Cart = (props) => {
  const selectedItems = props.selectedItems;

  
  const total = selectedItems.reduce(
    (accumulator, selectedItem) =>
      accumulator + parseFloat(selectedItem.product.price),
    0
  );

  return (
    <div className="container">
      <section className="Cart">
        {selectedItems.map((selectedItem, index) => (
          <div key={index}>
            <p>{selectedItem.product.shoename}</p>
            <p>Size: {selectedItem.itmSize}</p>
            <p>{selectedItem.product.price}</p>
          </div>
        ))}
      </section>
      <div className="total">
        <p>Total Items: {selectedItems.length}</p>
        <p>Total Price: {total.toFixed(2)}</p>{" "}
        
      </div>
    </div>
  );
};

export default Cart;
