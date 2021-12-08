export const addToCart = (item) => {
  return {
      type: "ADD_TO_CART",
      item: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
      type: "REMOVE_FROM_CART",
      itemId: itemId,
  };
};

export const increaseAmount = (itemId) => {
  return {
      type: "INCREASE_AMOUNT",
      itemId: itemId,
  };
};

export const decreaseAmount = (itemId) => {
  return {
      type: "DECREASE_AMOUNT",
      itemId: itemId,
  };
};