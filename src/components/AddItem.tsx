import { useState } from "react";
import cart from "../assets/cart-shopping-solid.svg";

type AddItemProps = {
  setTotalItems: (number: number) => void;
};

const AddItem: React.FunctionComponent<AddItemProps> = ({ setTotalItems }) => {
  const [items, setItems] = useState(0);

  function handleIncrease(): void {
    setItems((value) => value + 1);
    setTotalItems((value) => value + 1);
  }

  function handleDecrease(): void {
    setItems((value) => value - 1);
    setTotalItems((value) => value - 1);
  }

  function handleRemove(number: number): void {
    setItems(0);
    setTotalItems((value) => value - number);
  }

  return (
    <button className="btn-add-items">
      {items == 0 ? (
        <img
          onClick={handleIncrease}
          src={cart}
          className="img-add-items"
          alt=""
        />
      ) : (
        <div>
          <div className="items-amount">{items}</div>
          <button onClick={handleDecrease} className="items-decrease">
            -
          </button>
          <button onClick={handleIncrease} className="items-increase">
            +
          </button>
          <button onClick={() => handleRemove(items)} className="items-remove">
            x
          </button>
        </div>
      )}
    </button>
  );
};

export default AddItem;
