import formatCurrency from "../utilities/formatCurrency";

type CartProps = {
  itemsArray: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { count: number; rate: number };
    title: string;
  }[];
  cart: {
    [key: number]: number;
  };
  setCart: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
};

const Cart: React.FunctionComponent<CartProps> = ({
  cart,
  itemsArray,
  setCart,
}) => {
  //Calculate total amount of items in the cart
  const totalItems = Object.keys(cart).reduce(
    (sum, elem) => sum + cart[parseInt(elem, 10)],
    0
  );

  //Calculate total price from items in the cart
  const totalPrice = itemsArray
    .filter((elemObj) => Object.keys(cart).includes(elemObj["id"].toString()))
    .reduce((sum, elem) => sum + cart[elem["id"]] * elem["price"], 0);

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
    <section className="section-cart">
      <h1>Items in the cart:</h1>
      {totalItems === 0 ? (
        <p>No items in the cart yet</p>
      ) : (
        <>
          <ul>
            <li className="li-title">
              <span>Item</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </li>
            {itemsArray
              .filter((elem) =>
                Object.keys(cart).includes(elem["id"].toString())
              )
              .map((elem) => (
                <li key={elem["id"]} className="li-cart">
                  <div className="item-image-cart">
                    <img src={elem["image"]} alt="item image" />
                  </div>
                  <h2>{elem["title"].slice(0, 10) + "..."}</h2>
                  <p className="cart-price">{formatCurrency(elem["price"])}</p>
                  <div className="three-col">
                    <button
                      onClick={() => handleDecrease(elem["id"])}
                      className="items-decrease-cart"
                    >
                      -
                    </button>
                    <span>{cart[elem["id"]]}</span>
                    <button
                      onClick={() => handleIncrease(elem["id"])}
                      className="items-increase-cart"
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-price">
                    {formatCurrency(cart[elem["id"]] * elem["price"])}
                  </p>
                  <button
                    onClick={() => handleRemove(elem["id"])}
                    className="items-remove-cart"
                  >
                    x
                  </button>
                </li>
              ))}
          </ul>
          <div className="total-price price">
            <span>Total = </span> <span>{formatCurrency(totalPrice)}</span>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
