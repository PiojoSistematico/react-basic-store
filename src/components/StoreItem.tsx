import React from "react";
import star from "../assets/star-regular.svg";
import formatCurrency from "../utilities/formatCurrency";

type ItemProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};

const StoreItem: React.FunctionComponent<ItemProps> = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={image} alt="item image" />
      </div>
      <div className="item-description">
        <h2 className="title">{title}</h2>
        <div className="price-rate">
          <span className="price">{formatCurrency(price)}</span>
          <div className="rate">
            <span>{rating["rate"]}</span>
            <img className="star" src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
