import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import Image from "next/image";

function Cart(props) {
  const context = useContext(CartContext);
  let total = 0;

  if (context.cart.length <= 0) {
    return (
      <h1 class="text-center absolute top-1/2 left-1/2 -translate-x-1/2 gap-12 flex flex-col text-5xl font-bold">
        <div>&#9785;</div>
        No Item Is In The Cart
      </h1>
    );
  }
  return (
    <>
      <div class="w-full h-full pt-12 flex flex-col justify-center items-center rounded-xl">
        {context.cart.map((item, index) => {
          total += item.quantity * 5;
          return (
            <div
              class="md:container md:w-1/2 md:p-4  bg-white md:mx-auto flex flex-row justify-between items-center rounded-md mb-4 gap-0 max-md:gap-4
            max-sm:p-4"
              key={index}
            >
              <Image
                src={item.src}
                width={150}
                height={150}
                alt="Item"
                class="rounded-md"
              />
              <div class="md:text-xl font-bold flex flex-col justify-between items-center gap-4">
                <h1>Name</h1>
                {item.name}
              </div>
              <div class="md:text-lg font-bold flex flex-col justify-between items-center gap-4">
                <h1>Quantity</h1>
                {item.quantity}
              </div>
              <button
                class="bg-orange p-2 rounded-md text-white hover:bg-midBlack ease-in-out duration-300"
                onClick={() => context.removeFromCart(item.id)}
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
      <div class="fixed flex justify-between items-center bottom-0 right-0 text-xl font-bold p-4 bg-white gap-24 rounded-md mb-4 mr-4">
        Total : ${total}
        <button
          class="bg-orange p-2 rounded-md text-white"
          onClick={() => context.clearCart()}
        >
          Buy now
        </button>
      </div>
    </>
  );
}

export default Cart;
