import React from "react";
import Masonry from "react-masonry-css";

const data = [
  {
    id: 1,
    type: "text",
    content: "Flat 50% off on Selected Stock",
    style: "bg-red-700 text-yellow-200",
  },
  {
    id: 2,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_7_2_720x.jpg?v=1730464645",
    alt: "Festive & Wedding Collection 2024-25",
  },
  {
    id: 3,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_6_1_720x.jpg?v=1730464645",
    alt: "Kurta Pajama",
  },
  {
    id: 4,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_1_2_720x.jpg?v=1730464645",
    alt: "Traditional Outfit",
  },
  {
    id: 9,
    type: "text",
    content: "Flat 50% off on Selected Stock",
    style: "bg-blue-700 text-yellow-200",
  },
  {
    id: 5,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_2_2_720x.jpg?v=1730464645",
    alt: "Another Outfit",
  },
  {
    id: 6,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_3_1_720x.jpg?v=1730464645",
    alt: "Another Outfit",
  },
  {
    id: 7,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_4_1_720x.jpg?v=1730464645",
    alt: "Another Outfit",
  },
  {
    id: 8,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_5_1_720x.jpg?v=1730464645",
    alt: "Another Outfit",
  },
  {
    id: 10,
    type: "image",
    src: "https://www.mohanlalsons.com/cdn/shop/files/Webgrid_6_1_720x.jpg?v=1730464645",
    alt: "Kurta Pajama",
  },
  {
    id: 11,
    type: "text",
    content: "Flat 50% off on Selected Stock",
    style: "bg-green-700 text-yellow-200",
  },
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const CollectionGrid = () => {
  return (
    <div className="mt-[40rem] sm:mt-8">
      {/* Margin for mobile devices */}
      <Masonry
        breakpointCols={breakpoints}
        className="flex w-full ml-[-6px]"
        columnClassName="pl-4 bg-clip-padding"
      >
        {data.map((item, index) => {
          // Determine if the current item is the center item
          const isCenterItem = index === Math.floor(data.length / 10);

          return (
            <div
              key={item.id}
              className={`mb-4 relative group  ${
                isCenterItem ? "mt-[5rem]  z-10" : "mt-[1rem]"
              }`} // Apply extra margin for the center column and bring it to the front with z-index
            >
              {item.type === "image" ? (
                <div className="relative overflow-hidden rounded-lg   shadow-md">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto  object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
                    <button className="px-4 py-2 text-black bg-white rounded hover:bg-gray-100 text-sm sm:text-base md:text-lg lg:text-xl">
                      Shop Now
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className={`flex items-center justify-center h-80 text-2xl sm:text-3xl font-semibold rounded-lg shadow-md ${item.style}`}
                >
                  {item.content}
                </div>
              )}

              {/* Add text to the center item */}
            </div>
          );
        })}

        <div className="absolute inset-0 mt-[50rem] sm:mt-[20rem] md:mt-[10rem] lg:mt-[60rem] flex flex-col items-center justify-center text-center text-black z-20">
          <h2 className="text-[2rem] font-bold tracking-[3px]">
            Khaas lamhon ke liye..
          </h2>
          <p className="mt-2 text-lg sm:text-xl px-4 tracking-[0.5px] italic font-light">
            "Unleash timeless elegance on your special day with our exquisite{" "}
            <br /> wedding collection."
          </p>
        </div>
      </Masonry>
    </div>
  );
};

export default CollectionGrid;
