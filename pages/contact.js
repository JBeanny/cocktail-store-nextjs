import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div
      style={{ marginTop: "3em" }}
      className="w-11/12 m-auto flex flex-col gap-4 max-sm:gap-16"
    >
      <h1 className="text-4xl max-sm:text-2xl">Contact us</h1>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-orange">Location : </span>Boueng Snor,
        Chbar Ampov, Phnom Penh City, Cambodia
      </h3>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-orange">Phone Number : </span>
        (+855) 77 797 782
      </h3>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-orange">Facebook : </span>
        Tharoth
      </h3>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-orange">Telegram : </span>
        (+855) 77 797 782
      </h3>
      <Image
        src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
        width={1000}
        height={1000}
        className="w-8/12 max-md:w-11/12 mx-auto rounded-lg shadow-midBlack shadow-md"
        alt="Image"
      />
    </div>
  );
};

export default contact;
