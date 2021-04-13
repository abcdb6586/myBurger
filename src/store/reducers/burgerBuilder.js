import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const updateIngredient = {
    [action.ingredientType]: state.ingredients[action.ingredientType] + 1,
  };
  const updateIngredients = updateObject(state.ingredients, updateIngredient);
  const updateState = {
    ingredients: updateIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientType],
  };
  return updateObject(state, updateState);
};

const removeIngredient = (state, action) => {
  const updateIng = {
    [action.ingredientType]: state.ingredients[action.ingredientType] - 1,
  };
  const updateIngs = updateObject(state.ingredients, updateIng);
  const updateSt = {
    ingredients: updateIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientType],
  };
  return updateObject(state, updateSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ...state,
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionType.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionType.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionType.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
