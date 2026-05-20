import React from "react";

const Topbar = () => {
  return (
    <div className="h-20 bg-white border-b px-6 flex items-center justify-between">

      <h2 className="text-2xl font-bold">
        Add New Product
      </h2>

      <div className="flex items-center gap-3">

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h4 className="font-semibold">
            John Doe
          </h4>

          <p className="text-sm text-gray-500">
            Seller
          </p>
        </div>

      </div>
    </div>
  );
};

export default Topbar;