import * as actionsTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_INGREDIENT:
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedState);

        case actionsTypes.REMOVE_INGREDIENT:
            const updatedIngredientR = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updatedIngredientsR = updateObject(state.ingredients, updatedIngredientR);
            const updatedStateR = {
                ingredients: updatedIngredientsR,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedStateR);


        case actionsTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 4,
                error: false
            });

        case actionsTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});

        default:
            return state;
    }
};

export default reducer;
