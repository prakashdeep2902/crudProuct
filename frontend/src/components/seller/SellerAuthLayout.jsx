import React from "react";

const SellerAuthLayout = ({ children, brandingContent }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-175">

          {/* Left Side Branding Section */}
          <div className="hidden lg:flex bg-linear-to-br from-orange-50 to-white p-12 items-center justify-center border-r border-gray-200">
            {brandingContent}
          </div>

          {/* Right Side Form Section */}
          <div className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SellerAuthLayout;