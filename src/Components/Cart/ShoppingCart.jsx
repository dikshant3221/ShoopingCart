import React from 'react';
import { useState } from 'react';

const ShoppingCart = ({ items }) => {
  //   return (
  //     <div className="shopping-cart">
  //       <h2>Shopping Cart</h2>
  //       <ul>
  //         {/* {items.map((item) => (
  //           <li key={item.id}>{item.name}</li>
  //         ))}  */}
  //       </ul>
  //      
  //       <button onClick={handleCheckout}>Checkout</button>
  //     </div>
  //   );
  // };
  const [isVisible, setIsVisible] = useState(false);
  let subtotal = 0;
  const toggleSlider = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`slider ${isVisible ? 'visible' : ''}`}>
      <button onClick={toggleSlider}>Toggle Slider</button>
      <div className="slide-container">
        {items && items.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.imageUrl} alt={item.caption} />
            <h3>{item.caption}</h3>
          </div>
        ))}

        {items &&  items.map((item,index) => (
          <div key={index}>
          <p>Subtotal: {subtotal + item.price}</p>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default ShoppingCart;