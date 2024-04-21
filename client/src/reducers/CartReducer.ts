import CartItem from "../models/CartItem";

export enum CartActionType {
  ADDED,
  REMOVED
}

export interface ICartAction {
  type: CartActionType;
  productId: string;
  priceId?: string;
  name?: string;
}

const CartReducer = (cart: CartItem[], action: ICartAction) => {
  switch (action.type) {
    case CartActionType.ADDED: {
      const { productId, priceId, name } = action;
      if (cart.some((item) => item.productId === productId)) {
        return cart.map((item) => {
          return item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        if (!priceId || !name) {
          return cart;
        }
        return [...cart, new CartItem(productId, priceId, name, 1)];
      }
    }

    case CartActionType.REMOVED: {
      const { productId } = action;
      return cart.filter((item) => item.productId !== productId);
    }

    default: {
      return cart;
    }
  }
};

export default CartReducer;
