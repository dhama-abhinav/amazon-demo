import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import { CheckoutProduct } from "./CheckoutProduct";
import { Subtotal } from "./Subtotal";
import CurrencyFormat from 'react-currency-format'

export const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
        <div className='checkout__left'>
        <img
        className="checkout__image"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Baket is Empty</h2>
          <p>
            You have no items in your basket . To buy one or more items , click
            'ADD to Basket'
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping basket...</h2>
          {/* listing out all the checkout products */}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}

        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
          </div>
  );
};
