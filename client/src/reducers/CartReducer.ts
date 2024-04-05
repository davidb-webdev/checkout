import CartItem from "../models/CartItem";

export enum CartAction {
  ADDED,
  REMOVED
}

interface IAction {
  type: CartAction;
  payload: string;
}

const CartReducer = (cart: CartItem[], action: IAction) => {
  switch (action.type) {
    case CartAction.ADDED: {
      const id = String(action.payload);
      if (cart.some((item) => item.id === id)) {
        return cart.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...cart, new CartItem(id, 1)];
      }
    }
    case CartAction.REMOVED: {
      const id = String(action.payload);
      return cart.filter((item) => item.id !== id);
    }
    default: {
      return cart;
    }
  }
};

export default CartReducer;
