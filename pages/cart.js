import React, { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import Image from "next/image";
import Modal from "../components/Modal/Modal";

function Cart(props) {
  const [modal, setModal] = useState(false);
  const context = useContext(CartContext);
  let total = 0;

  if (context.cart.length <= 0) {
    return (
      <h1 class="text-center absolute top-1/2 left-1/2 -translate-x-1/2 gap-12 flex flex-col text-5xl font-bold max-sm:text-2xl">
        <div>&#9785;</div>
        No Item Is In The Cart
      </h1>
    );
  }
  return (
    <>
      {modal ? <Modal /> : ""}
      <div className="w-full h-full pt-12 flex flex-col justify-center items-center rounded-xl">
        {context.cart.map((item, index) => {
          let price =
            item.id.split("")[4] != 0
              ? item.id.split("")[4]
              : item.id.split("")[3];
          total += item.quantity * price;
          return (
            <div
              className="md:container md:w-1/2 md:p-4  bg-white md:mx-auto flex flex-row justify-between items-center rounded-md mb-4 gap-0 max-md:gap-4 max-sm:p-4 max-sm:w-11/12"
              key={index}
            >
              <Image
                src={item.src}
                width={150}
                height={150}
                alt="Item"
                class="rounded-md max-sm:scale-95"
              />
              <div className="md:text-xl max-sm:text-sm font-bold flex flex-col justify-between items-center gap-4">
                <h1>Name</h1>
                {item.name}
              </div>
              <div className="md:text-lg max-sm:text-sm font-bold flex flex-col justify-between items-center gap-4">
                <h1>Quantity</h1>
                {item.quantity}
              </div>
              <button
                className="bg-orange p-2 max-sm:p-3 rounded-md text-white hover:bg-midBlack ease-in-out duration-300 max-sm:text-xs"
                onClick={() => context.removeFromCart(item.id)}
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
      <div className="fixed flex justify-between items-center bottom-0 right-0 text-xl font-bold p-4 bg-white gap-24 rounded-md max-sm:rounded-none mb-4 mr-4 max-sm:mr-0 max-sm:mb-0 max-sm:w-screen">
        Total : ${total}
        <button
          className="bg-orange p-2 rounded-md text-white"
          onClick={() => {
            setModal(true);
            setTimeout(() => {
              setModal(false);
              context.clearCart();
            }, 2000);
          }}
        >
          Buy now
        </button>
      </div>
    </>
  );
}

export default Cart;
