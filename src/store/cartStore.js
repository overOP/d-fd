import { create } from "zustand";
export const useCart = create((set) => ({
  cartItem: [],
  cartCount: 0, 


  addToCart: (item) =>
    set((state) => {
      const index = state.cartItem.findIndex((i) => i.id === item.id);
      let updatedCart;

      if (index !== -1) {
        updatedCart = [...state.cartItem];
        updatedCart[index].quantity += 1;
      } else {
        updatedCart = [...state.cartItem, { ...item, quantity: 1 }];
      }

      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cartItem.filter((item) => item.id !== id);
      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),


  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cartItem
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); 

      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  clearCart: () => set({ cartItem: [], cartCount: 0 }),
}));