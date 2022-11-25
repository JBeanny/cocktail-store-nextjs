import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div
      style={{ marginTop: "3em" }}
      className="w-11/12 m-auto flex flex-col gap-4 max-sm:gap-16"
    >
      <h1 className="text-4xl">About Cocktailer</h1>
      <h3 className="text-lg">
        Cocktailer is a cocktail binder shop which will provide you with good
        taste and very fresh cocktails for your tought and happy day
        <span className="text-3xl">&#9786;</span>
      </h3>
      <h3 className="text-lg">
        Our store had been opened on{" "}
        <span className="text-orange font-bold">24th November 2022</span>
      </h3>
      <h3 className="text-lg">
        Founder :<span className="text-orange font-bold"> Yim Sotharoth</span>{" "}
        since 2022
      </h3>
      <Image
        src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        width={1000}
        height={1000}
        className="w-1/2 max-md:w-11/12 mx-auto rounded-lg shadow-midBlack shadow-md"
        alt="Image"
      />
    </div>
  );
};

export default about;
