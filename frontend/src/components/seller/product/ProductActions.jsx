import React from "react";

const ProductActions = ({ handelProductSave, handelCancel }) => {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <button
        className="px-6 py-3 border rounded-xl font-semibold hover:bg-gray-100"
        onClick={handelCancel}
      >
        Cancel
      </button>

      <button
        className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600"
        onClick={handelProductSave}
      >
        Save Product
      </button>
    </div>
  );
};

export default ProductActions;
