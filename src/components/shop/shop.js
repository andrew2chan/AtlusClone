import './shop.css';
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

const Shop = () => {
  const [shop, updateShop] = useState([]);

  const shopGet = useSelector(state => state.shop.value);

  useEffect(() => {
    updateShop(shopGet);
  },[shopGet])

  return (
    <>
      <div className="shop-cards-container">
        {
          shop.map((item, index) => {
            return(
              <div className="shop-cards" key={index}>
                <div className="shop-cards-image"><img src={item.image} alt="shop" /></div>
                <div className="shop-cards-text">{item.title}</div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Shop;
