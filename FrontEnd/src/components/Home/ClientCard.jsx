import React from "react";

const ClientCard = (prop) => {
  return (
    <div className="w-2/4 bg-white shadow-md rounded-lg p-6 text-center font-sans">
      <p className="w-48 text-gray-600 text-base  text-wrap font-medium mb-4">
        "{prop.para}"
      </p>
      <div className="mt-6 flex flex-col items-center">
        <img
          src={prop.image} // Replace with the actual image source
          alt={prop.name}
          className="w-16 h-16 rounded-full"
        />
        <h3 className="mt-4 text-gray-900 font-semibold text-lg">
          {prop.name}
        </h3>
        <p className="text-gray-600 text-sm">{prop.position}</p>
      </div>
    </div>
  );
};

export default ClientCard;
