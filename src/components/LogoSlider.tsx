
import * as React from "react";

type Logo = {
  name: string;
  src: string;
  width?: number;
};

const logos: Logo[] = [
  { 
    name: "La Poste", 
    src: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1f/Logo_La_Poste.svg/1200px-Logo_La_Poste.svg.png", 
    width: 140
  },
  { 
    name: "Société Générale", 
    src: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/9d/Logo_Société_Générale.svg/1200px-Logo_Société_Générale.svg.png", 
    width: 150
  },
  { 
    name: "Orange", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1200px-Orange_logo.svg.png", 
    width: 120
  },
  { 
    name: "Carrefour", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/1200px-Carrefour_logo.svg.png", 
    width: 160
  },
  { 
    name: "SNCF", 
    src: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c9/Logo_SNCF_2011.svg/1200px-Logo_SNCF_2011.svg.png", 
    width: 140
  },
  { 
    name: "La Poste", 
    src: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1f/Logo_La_Poste.svg/1200px-Logo_La_Poste.svg.png", 
    width: 140
  },
];

const LogoSlider = () => {
  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">Ils nous font confiance</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img
              src={logo.src}
              alt={logo.name}
              width={logo.width || 120}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
