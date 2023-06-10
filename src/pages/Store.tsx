import StoreItem from "../components/StoreItem";

type StoreProps = {
  items: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { count: number; rate: number };
    title: string;
  }[];
};

const Store: React.FunctionComponent<StoreProps> = ({ items }) => {
  return (
    <section className="store-section">
      <h1>Store</h1>
      <section className="items-section">
        {items.map((elem, index) => (
          <StoreItem key={index} {...elem}></StoreItem>
        ))}
      </section>
    </section>
  );
};

export default Store;
