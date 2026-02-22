export const DishCard = ({ title, price }) => {
  const addToCart = () => {};

  return (
    <>
      <h4>{title}</h4>
      <span>{price}</span>
      <button onClick={addToCart}>+</button>
    </>
  );
};
