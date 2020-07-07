export const ADD_TO_CART = 'ADD_TO_CART'; 
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART, // tipo da acao que vai guiar o reducer
  product,// obj de payload que vai alterar meu state
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
});