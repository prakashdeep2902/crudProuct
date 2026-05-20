import React from 'react'
import Newsletter from './Newsletter';

const BestSelling = () => {

    const products = [
  {
    title: "Apple iPhone 14 (128GB)",
    image:
      "https://cdn-icons-png.flaticon.com/512/0/191.png",
    price: "$699.00",
    rating: "4.6",
    reviews: "(2.2k)",
  },
  {
    title: "HP 15 Intel Core i5",
    image:
      "https://cdn-icons-png.flaticon.com/512/179/179386.png",
    price: "$529.00",
    rating: "4.4",
    reviews: "(1.1k)",
  },
  {
    title: "Canon EOS 200D II DSLR",
    image:
      "https://cdn-icons-png.flaticon.com/512/1042/1042390.png",
    price: "$449.00",
    rating: "4.5",
    reviews: "(890)",
  },
  {
    title: "JBL Flip 6 Bluetooth",
    image:
      "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    price: "$129.00",
    rating: "4.7",
    reviews: "(1.3k)",
  },
  {
    title: "Green Soul Monster Chair",
    image:
      "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
    price: "$159.00",
    rating: "4.4",
    reviews: "(760)",
  },
  {
    title: "Titan Analog Watch",
    image:
      "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    price: "$89.00",
    rating: "4.3",
    reviews: "(980)",
  },
];

  return (
    <section className="w-full mt-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-black">
          Best Selling Products
        </h2>

        <button className="text-orange-500 text-sm font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Product Slider */}
      <div className="relative">
        
        {/* Left Arrow */}
        <button className="absolute -left-4.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center">
          ❮
        </button>

        {/* Right Arrow */}
        <button className="absolute -right-4.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center">
          ❯
        </button>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border rounded-2xl overflow-hidden">
          {products.map((item, index) => (
            <div
              key={index}
              className="border-r last:border-r-0 p-4 hover:shadow-sm transition-all duration-300 bg-white"
            >
              
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-gray-800 min-h-10 line-clamp-2">
                {item.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500 text-sm">★</span>

                <span className="text-xs text-gray-700">
                  {item.rating}
                </span>

                <span className="text-xs text-gray-400">
                  {item.reviews}
                </span>
              </div>

              {/* Price */}
              <p className="text-xl font-bold text-black mt-2">
                {item.price}
              </p>

              {/* Add To Cart */}
              <button className="mt-2 text-orange-500 text-sm font-semibold hover:underline">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <Newsletter/>
    </section>
  );

}

export default BestSelling