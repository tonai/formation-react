import { useState } from 'react';
import './CartItem.css';

function CartItem(props) {
  const [quantity, setQuantity] = useState(1);
  const total = props.price * quantity;

  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handlePlus() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="CartItem">
      <div>{props.name}</div>
      <div>{props.price}€</div>
      <div>
        <button
          type="button"
          onClick={handleMinus}
          disabled={quantity === 0}
        >-</button>
        {quantity}
        <button type="button" onClick={handlePlus}>+</button>
      </div>
      <div>{total}€</div>
    </div>
  );
}

export default CartItem;
