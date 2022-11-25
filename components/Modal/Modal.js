import React from "react";

const Modal = () => {
  return (
    <div className="bg-midBlack p-6 absolute right-0 top-48 flex flex-col rounded-tl-md rounded-bl-md gap-2 animate-bounce max-sm:w-screen max-sm:top-32 max-sm:z-50 max-sm:rounded-none">
      <h1 className="text-white">You have successfully purchased</h1>
      <h1 className="text-white">Thank you for choosing us</h1>
    </div>
  );
};

export default Modal;
