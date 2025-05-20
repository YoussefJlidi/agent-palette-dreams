
import * as React from "react";

const LogoSlider = () => {
  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">Ils nous font confiance</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 items-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
        <div className="text-gray-400 text-center p-4">
          Emplacement pour vos logos
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
