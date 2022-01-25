const initialState = {
  cartItems: [],
};

export const cartItemsReducer = (state = initialState, action) => {
  let itemIndex = 0;
  if (action.itemId !== undefined) {
      itemIndex = state.cartItems.findIndex(item => item.id == action.itemId);
  }
  console.log(itemIndex); 

  switch (action.type) {
      case 'ADD_TO_CART':
          return { ...state, cartItems: [...state.cartItems, action.item] };

      case 'REMOVE_FROM_CART':
          return {
              ...state,
              cartItems: [...state.cartItems.slice(0, itemIndex), ...state.cartItems.slice(itemIndex + 1, state.cartItems.length)]
          };

      case 'INCREASE_AMOUNT':
          return {
              ...state,
              cartItems: [
                  ...state.cartItems.slice(0, itemIndex),
                  { ...state.cartItems[itemIndex], amount: state.cartItems[itemIndex].amount + 1, },
                  ...state.cartItems.slice(itemIndex + 1),
              ],
          };

      case 'DECREASE_AMOUNT':
          return {
              ...state,
              cartItems: [...state.cartItems.slice(0, itemIndex),
              { ...state.cartItems[itemIndex], amount: state.cartItems[itemIndex].amount - 1, },
              ...state.cartItems.slice(itemIndex + 1)]
          };

      default:
          return state;
  }
};