import ManualInput from "./ManualInput";
import DataChart from "./DataChart";
import { useState } from "react";

const Test = () => {

  const [data, setData] = useState([]);

  return (
    <div className="pt-14 lg:px-8 min-h-screen flex flex-col items-center justify-center relative bg-black">
  
      {/* Gradient Background with ClipPath */}
      <div className="isolate px-12 pt-7 lg:px-8">
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 25.5% 25.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="movingShape relative left-[calc(50%-5rem)] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d503ff] to-[#9089fc] md:opacity-14 sm:opacity-60 sm:left-[calc(50%-15rem)] sm:w-[120rem]"
    />
  </div>
</div>
      

      {/* 🎤 Innehåll */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-6 md:space-y-0 overflow-hidden px-6 sm:px-10">
        
        {/* Textinnehåll */}
        <div className="relative p-6 backdrop-blur-md bg-black/30 rounded-lg border-2 shadow-lg shadow-gray-750/30 max-w-lg w-full ">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-white text-center md:text-left pb-6">
            Data visualisering och analys
          </h3>
          <p className="font-normal text-white text-center md:text-left">
            Med hjälp av att analysera data kan du förstå er kund. Med data kan du effektivisera processer och hitta flaskhalsar. Genom att analysera data kan du hitta onödiga kostnader.
          </p>
        </div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
        
        {/* Bildinnehåll */}
        <div className="relative sm:w-80 md:w-180 lg:w-200 p- flex justify-center">
          <div className="rounded-lg shadow-lg overflow-hidden">
            
            <img
              src="https://ik.imagekit.io/ably/ghost/prod/2023/08/unnamed--6-.png"
              alt="Noteworthy Technology Acquisitions"
              className="w-full h-auto rounded-lg border-3 object-cover"
            />
            
          </div>
        </div>

      </div>
    </div>
  </div>
    
  );
};

export default Test;