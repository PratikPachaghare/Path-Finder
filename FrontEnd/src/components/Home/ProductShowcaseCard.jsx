import React from 'react';

function ProductShowcaseCard(props) {
  return (
    <div className='flex'>
    <div className="w-11/12 hover:bg-slate-100 hover:p-7 p-6 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl max-w-lg mx-auto">
      
      <div className="flex justify-center mb-6">
        <img
          src={props.image}
          alt="Wake UP Water Showcase"
          className="rounded-lg w-full"
        />
      </div>
      
      
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
        {props.title}
      </h2>
      <p className="text-lg text-gray-600 text-center">
        {props.description}
      </p>
    </div>
    <div className="w-full hover:bg-slate-100 hover:p-7 p-8 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl max-w-lg mx-auto">
      
      <div className="flex justify-center mb-6">
        <img
          src={props.image}
          alt="Wake UP Water Showcase"
          className="rounded-lg w-full "
        />
      </div>
      
      
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
        {props.title}
      </h2>
      <p className="text-lg text-gray-600 text-center">
        {props.description}
      </p>
    </div>
    </div>
  );
}

export default ProductShowcaseCard;
