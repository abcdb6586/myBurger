import * as actionType from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return {
    type: actionType.ADD_INGREDIENT,
    ingredientType: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionType.REMOVE_INGREDIENT,
    ingredientType: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionType.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchingIngredientsFailed = () => {
  return {
    type: actionType.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredient = () => {
  return (dispatch) => {
    axios
      .get(
        'https://react-myburger-da364-default-rtdb.firebaseio.com/ingredients.json'
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchingIngredientsFailed());
      });
  };
};
