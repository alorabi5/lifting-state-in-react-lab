// src/components/IngredientList.jsx

const IngredientList = (props) => {

    const IngredientElements = props.availableIngredients.map(
      (ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.handelAddBurgerStack(ingredient)}>
            +
          </button>
        </li>
      )
    );


  return <ul>{IngredientElements}</ul>;
};

export default IngredientList;
