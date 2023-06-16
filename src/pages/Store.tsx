import StoreItem from "../components/StoreItem";

type StoreProps = {
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

const Store: React.FunctionComponent<StoreProps> = ({
  itemsArray,
  cart,
  setCart,
}) => {
  return (
    <section className="store-section">
      <section className="items-section">
        {itemsArray.map((elem, index) => (
          <StoreItem
            key={index}
            cart={cart}
            setCart={setCart}
            {...elem}
          ></StoreItem>
        ))}
      </section>
    </section>
  );
};

export default Store;
