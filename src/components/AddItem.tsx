import cartImg from "../assets/cart-shopping-solid.svg";

type AddItemProps = {
  id: number;
  cart: {
    [key: number]: number;
  };
  setCart: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
};

const AddItem: React.FunctionComponent<AddItemProps> = ({
  id,
  cart,
  setCart,
}) => {
  //Add 1 item to the cart if there is none and add 1 to the current amount if it was previously in the cart
  function handleIncrease(index: number): void {
    setCart((prevCart) => ({
      ...prevCart,
      [index]: (prevCart[index] || 0) + 1,
    }));
  }

  //Delete the item from the cart is the function is called with one element or decrease the amount by 1
  function handleDecrease(index: number): void {
    setCart((prevCart) => {
      if (prevCart[index] === 1) {
        const updatedCart = { ...prevCart };
        delete updatedCart[index];
        return updatedCart;
      } else {
        return {
          ...prevCart,
          [index]: (prevCart[index] || 0) - 1,
        };
      }
    });
  }

  //Delete the item from the cart
  function handleRemove(index: number): void {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[index];
      return updatedCart;
    });
  }

  return (
    <section className="btn-add-items">
      {cart[id] === 0 || !cart.hasOwnProperty(id) ? (
        <img
          onClick={() => handleIncrease(id)}
          src={cartImg}
          className="img-add-items"
          alt=""
        />
      ) : (
        <div>
          <div className="items-amount">{cart[id]}</div>
          <button onClick={() => handleDecrease(id)} className="items-decrease">
            -
          </button>
          <button onClick={() => handleIncrease(id)} className="items-increase">
            +
          </button>
          <button onClick={() => handleRemove(id)} className="items-remove">
            x
          </button>
        </div>
      )}
    </section>
  );
};

export default AddItem;
