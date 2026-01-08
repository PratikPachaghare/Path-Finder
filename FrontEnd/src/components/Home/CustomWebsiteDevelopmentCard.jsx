import React from "react";

function CustomWebsiteDevelopmentCard(props) {
  return (
    <div className="w-full flex flex-col   md:flex-row  items-center shadow-2xl rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6" style={{backgroundColor: "white"}}>
      <div className="flex-1 text-left">
        <h2 className="text-3xl font-bold text-black text-inherit ">{props.title}</h2>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <hr className="my-4 w-full border-t-4  border-blue-600" />
        <div className="mt-4 space-y-2">
          {props.bulletPoints.map((item, index) => (
            <p key={index} className="flex items-center text-xl text-gray-700">
              • {item}
            </p>
          ))}
        </div>
      </div>

      
      <div className="flex-1 flex justify-center">
        <img src={props.image} alt={props.title} className="w-auto h-auto" />
      </div>
    </div>
  );
}

export default CustomWebsiteDevelopmentCard;
