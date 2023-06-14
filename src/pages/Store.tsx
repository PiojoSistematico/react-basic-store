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
  setTotalItems: (number: number) => void;
};

const Store: React.FunctionComponent<StoreProps> = ({
  itemsArray,
  setTotalItems,
}) => {
  return (
    <section className="store-section">
      <h1>Store</h1>
      <section className="items-section">
        {itemsArray.map((elem, index) => (
          <StoreItem
            key={index}
            setTotalItems={setTotalItems}
            {...elem}
          ></StoreItem>
        ))}
      </section>
    </section>
  );
};

export default Store;
