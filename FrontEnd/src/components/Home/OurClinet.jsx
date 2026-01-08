import React from 'react';
import APVA_logo from '../../Asset/imagesWeb/APVA_logo.png';
import foodlex from '../../Asset/imagesWeb/foodlex.png';
import hiltopTusuki from '../../Asset/imagesWeb/hiltopTusuki.png';
import ikontech from '../../Asset/imagesWeb/ikontech.png';
import FasCave from '../../Asset/imagesWeb/FasCave_Logo.png';


export default function OurClient() {
  return (
    <div className="flex-col justify-center bg-white py-10 ">
      {/* Section Title */}
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-8">
        OUR CLIENTS
      </h1>

      {/* Infinite Scrolling Logos */}
      <div className="w-3/4 m-auto relative overflow-hidden">
        <div className=" flex animate-scroll gap-10 items-center whitespace-nowrap">
          {/* Logos */}
          <img src={foodlex} alt="Foodlex" className="h-16" />
          <img src={ikontech} alt="Ikontech" className="h-16" />
          <img src={hiltopTusuki} alt="Hilltop Tsuki" className="h-16" />
          <img src={APVA_logo} alt="APVA Logo" className="h-16 mr-4" />
          <img src={FasCave} alt="FasCave" className="h-16" />

          <img src={foodlex} alt="Foodlex" className="h-16" />
          <img src={ikontech} alt="Ikontech" className="h-16" />
          <img src={hiltopTusuki} alt="Hilltop Tsuki" className="h-16" />
          <img src={APVA_logo} alt="APVA Logo" className="h-16 mr-4" />
          <img src={FasCave} alt="FasCave" className="h-16" />
        </div>
      </div>
    </div>
  );
}
