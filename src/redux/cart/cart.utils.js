export const addItemToCart = (cartItems, cartItemToBeAdded) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToBeAdded.id
  );

  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === cartItemToBeAdded.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...cartItemToBeAdded, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToBeRemoved) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToBeRemoved.id
  );

  if (existingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== existingCartItem.id);

  return cartItems.map((item) => {
    return item.id === existingCartItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};
