import React, { useState, useEffect } from 'react';
import ShoppingCart from '../Cart/ShoppingCart';
import '../products/ProductList.css'
import axios from 'axios';
import StarRating from '../StartRating/StartRating.jsx'
const url = "https://fakestoreapi.com/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [selectedItem, setSelecteditems] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        axios.get(url).then(response => {
          setProducts(response.data);
        })
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, [])
  const handleAddToCart = (product) => {
    // Implement the logic to add the product to the shopping cart
    console.log('Adding product to cart:', product);
    var slectedproduct = products.filter(item => {
      if (item.name === product.name) {
        return item;
      }
      return null;
    })
    setSelecteditems(item => [...item, ...slectedproduct]);
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-container">
        {products && products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <p className="product-price">
                <span className="price-label">Price:</span>
                ${product.price.toFixed(2)}
              </p>
              <div className="product-rating">
                <span className="rating-label">Rating:</span>
                <StarRating rating={product.rating.rate} />
              </div>
            </div>
            <button class="cssbuttons-io-button" onClick={() => handleAddToCart(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                <span>Add to Cart</span>
              </button>
          </div>
        ))}
        {selectedItem ? <ShoppingCart selectedItem={selectedItem} /> : null}
      </div>
    </div >
  );
};

export default ProductList