import { DishCard } from "./DishCard";
import { dishes } from "./data";

export const MenuList = (props) => {
  const dishesArray = Object.values(dishes);

  return (
    <>
      {dishesArray.map((dish) => (
        <DishCard title={dish.title} price={dish.price} />
      ))}
    </>
  );
};
