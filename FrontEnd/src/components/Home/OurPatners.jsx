import React from 'react';
import AWS from '../../Asset/imagesWeb/patners/AWS.png';
import Google_Cloud from '../../Asset/imagesWeb/patners/Google_Cloud.png';
import meta from '../../Asset/imagesWeb/patners/meta.png';
import Microsoft_Azure from '../../Asset/imagesWeb/patners/Microsoft_Azure.png';
import Microsoft_FasCave from '../../Asset/imagesWeb/patners/Microsoft_FasCave.png';


export default function OurPatners() {
  return (
    <div className="flex-col justify-center bg-white py-10 ">
      
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-8">
        OUR PATNERS
      </h1>

      <p className="w-1/2 m-auto text-center text-xl text-gray-600  mb-8">
      Our strategic partners help us deliver unmatched business value and unique experiences
      </p>

      {/* Infinite Scrolling Logos */}
      <div className="w-3/4 m-auto relative overflow-hidden">
        <div className=" flex animate-scroll gap-10 items-center whitespace-nowrap">
          <img src={AWS} alt="AWS" className="h-16" />
          <img src={Google_Cloud} alt="Google_Cloud" className="h-16" />
          <img src={meta} alt="meta" className="h-16" />
          <img src={Microsoft_Azure} alt="Microsoft_Azure" className="h-16 " />
          <img src={Microsoft_FasCave} alt="Microsoft_FasCave" className="h-16" />
          
          <img src={AWS} alt="AWS" className="h-16" />
          <img src={Google_Cloud} alt="Google_Cloud" className="h-16" />
          <img src={meta} alt="meta" className="h-16" />
          <img src={Microsoft_Azure} alt="Microsoft_Azure" className="h-16 " />
          <img src={Microsoft_FasCave} alt="Microsoft_FasCave" className="h-16" />
        </div>
      </div>
    </div>
  );
}
