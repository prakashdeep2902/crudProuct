import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className=" flex items-center justify-center p-6">

      <div className="w-full max-w-7xl bg-white rounded-[30px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-[#fafafa] p-14 flex flex-col justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-orange-500 rounded-md"></div>

            <h1 className="text-4xl font-bold">
              Shop<span className="text-orange-500">Kart</span>
            </h1>
          </div>

          {/* Content */}
          <div>

            <h1 className="text-7xl font-bold leading-[90px] text-gray-900">
              Shop Smarter,
              <br />
              Live{" "}
              <span className="text-orange-500">
                Better.
              </span>
            </h1>

            <p className="text-gray-500 text-2xl mt-8 leading-10">
              Discover top products, exclusive offers,
              and the best shopping experience.
            </p>

            {/* Image */}
            <div className="mt-12 flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                alt="shopping"
                className="w-[420px]"
              />
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 gap-5 mt-10">

            <div className="bg-[#fff3ec] rounded-2xl p-5 text-center">
              <h3 className="font-semibold text-sm">
                Secure Payment
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                100% secure payment
              </p>
            </div>

            <div className="bg-[#fff3ec] rounded-2xl p-5 text-center">
              <h3 className="font-semibold text-sm">
                Fast Delivery
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                Quick & reliable
              </p>
            </div>

            <div className="bg-[#fff3ec] rounded-2xl p-5 text-center">
              <h3 className="font-semibold text-sm">
                Best Quality
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                Original products
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-16 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;