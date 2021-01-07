import { useState } from 'react';

import { formatPrice } from '../../services/formatter';

import CartItem from '../CartItem/CartItem';

function Cart() {
  const [cart, setCart] = useState([
    { name: 'Chaussure', price: 59, quantity: 1, id: 0 },
    { name: 'Chaussettes', price: 19, quantity: 1, id: 1 }
  ]);

  function setQuantity(newQuantity, id) {
    setCart(oldCart => {
      const newCart = oldCart.map(item => {
        if (item.id === id) {
          item.quantity = newQuantity;
        }
        return item;
      });
      return newCart;
    });
  }

  const list = cart.map(item => (<CartItem
    key={item.id}
    id={item.id}
    name={item.name}
    price={item.price}
    quantity={item.quantity}
    setQuantity={setQuantity}
  />));

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].quantity);
  }

  return (
    <div>
      {list}
      <div>Total = {formatPrice(total)}</div>
    </div>
  );
}

export default Cart;
