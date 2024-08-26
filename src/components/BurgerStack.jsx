// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {

  const burgerStackList = props.stack.map((ingredient, idx) => (
    <li key={idx} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={() => props.handelRemoveBurgerStack(ingredient)}>X</button>
    </li>
  ));

  return (
    <>
      {props.stack.length !== 0 ? (
        <ul>{burgerStackList}</ul>
      ) : (
        "Burger Stack is Empty"
      )}
    </>
  );
};

export default BurgerStack;
