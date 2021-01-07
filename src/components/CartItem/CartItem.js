import './CartItem.css';

function CartItem(props) {
  const total = props.price * props.quantity;

  function handleMinus() {
    if (props.quantity > 0) {
      props.setQuantity(props.quantity - 1, props.id);
    }
  }

  function handlePlus() {
    props.setQuantity(props.quantity + 1, props.id);
    props.setQuantity(props.quantity + 1, props.id);
  }

  return (
    <div className="CartItem">
      <div>{props.name}</div>
      <div>{props.price}€</div>
      <div>
        <button
          type="button"
          onClick={handleMinus}
          disabled={props.quantity === 0}
        >-</button>
        {props.quantity}
        <button type="button" onClick={handlePlus}>+</button>
      </div>
      <div>{total}€</div>
    </div>
  );
}

export default CartItem;
