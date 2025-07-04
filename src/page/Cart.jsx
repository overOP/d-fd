import React from "react";
import { useCart } from "../store/cartStore";
import { ClipLoader } from "react-spinners";

const Cart = () => {
  const cart = useCart((state) => state.cartItem);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  return (
    <>
        <main className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-[#d4492b] mb-3 text-center">
          Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </h2>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-400 mt-2 text-sm">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 bg-[#fafafa] p-3 rounded-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      </main>
    </>
  );
};

export default Cart;