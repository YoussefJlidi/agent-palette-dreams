
import * as React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

type Logo = {
  name: string;
  src: string;
};

const logos: Logo[] = [
  { 
    name: "Company 1", 
    src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80" 
  },
  { 
    name: "Company 2", 
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80" 
  },
  { 
    name: "Company 3", 
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80" 
  },
  { 
    name: "Company 4", 
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80" 
  },
  { 
    name: "Company 5", 
    src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80" 
  }
];

const LogoSlider = () => {
  return (
    <div className="w-full mt-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div className="p-2 h-20 flex items-center justify-center rounded-md">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </div>
      </Carousel>
    </div>
  );
};

export default LogoSlider;
