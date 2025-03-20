import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Kalkylator = () => {
  const [antalKurser, setAntalKurser] = useState(0);
  const [valdaSprak, setValdaSprak] = useState([]); // Array för språk
  const [fardigtMaterial, setFardigtMaterial] = useState('');
  const [valdaDesigner, setValdaDesigner] = useState([]); // Array för designval
  const [kostnad, setKostnad] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [valtPaket, setValtPaket] = useState(''); // State för valt paket
  const popupRef = useRef(null); // Reference till popup-fönstret


  useEffect(() => {
    if (isOpen) {
      // Animering när popup öppnas
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      // Animering när popup stängs
      gsap.to(popupRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => {
          // När animationen är klar, stänger vi popup-fönstret helt
          setIsOpen(false);
        },
      });
    }
  }, [isOpen]); // Kör varje gång isOpen ändras

  // Funktion för att hantera stängning av popup
  const handleClose = () => {
    gsap.to(popupRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => setIsOpen(false),
    });
  };

  

  const KursAlternativ = [
    { namn: "Litet paket 3 Kurser", pris: 15000 },
    { namn: "Mellan paket 5 Kurser", pris: 22000 },
    { namn: "Stort paket 7 Kurser", pris: 30000 },
  ];

  // Tillgängliga alternativ
  const språkAlternativ = [
    { namn: "Svenska", pris: 0 },
    { namn: "Engelska", pris: 500 },
    { namn: "Arabiska", pris: 400 },
    { namn: "Tyska", pris: 600 },
    { namn: "Dari/Persiska", pris: 700 }
  ];

  const designAlternativ = [
    { namn: "Enkel", pris: 0 },
    { namn: "Avancerad", pris: 3000 },
  ];

  // Hantera val av språk
  const toggleSprak = (sprak) => {
    setValdaSprak((prev) =>
      prev.includes(sprak)
        ? prev.filter((s) => s !== sprak) // Ta bort om den redan finns
        : [...prev, sprak] // Lägg till om den inte finns
    );
  };

  // Hantera val av design
  const toggleDesign = (design) => {
    setValdaDesigner((prev) =>
      prev.includes(design)
        ? prev.filter((d) => d !== design)
        : [...prev, design]
    );
  };

  // Beräkna kostnaden baserat på valen
  const beräknaKostnad = () => {
    setLoading(true);
  
    setTimeout(() => {
      let totalKostnad = 0;
  
      // Lägg till kostnad för paket
      const paket = KursAlternativ.find((k) => k.namn === valtPaket);
      if (paket) {
        totalKostnad += paket.pris;
        
        // Om fardigtMaterial är "Nej", ge 20% rabatt på paketkostnaden
        if (fardigtMaterial === "Nej") {
          totalKostnad += paket.pris * 0.5; // Extra ifall material inte finns 40%
        }
      
        if (fardigtMaterial === "NästanAllt") {
            totalKostnad += paket.pris * 0.1; // Extra på 10%
            }
        }
        
  
      // Lägg till kostnad för valda språk
      valdaSprak.forEach((sprak) => {
        totalKostnad += språkAlternativ.find((s) => s.namn === sprak)?.pris || 0;
      });
  
      // Lägg till kostnad för färdigt material
      if (fardigtMaterial === "Nej") totalKostnad += 200;
  
      // Lägg till kostnad för valda designalternativ
      valdaDesigner.forEach((design) => {
        totalKostnad += designAlternativ.find((d) => d.namn === design)?.pris || 0;
      });
  
      setKostnad(totalKostnad);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className=" kalkylator text-center mt-10 lg:mt-10">
        
        <h2 className="text-4xl font-extrabold text-gray-100 mb-6 pb-10 transform transition duration-500 ease-in-out hover:scale-105 hover:text-yellow-700/90 pt-15">
  Testa vår onboarding kalkylator.
</h2>
<button
  onClick={() => setIsOpen(true)}
  className=" text-black py-3 px-6 rounded-lg hover:text-yellow-700/90 hover:scale-105 transition font-semibold shadow-lg border-red-600"
>
  Kalkylera mitt program
</button>
<hr className="mt-8 border-t-2 border-gray-300 max-w-[70vw] mx-auto pb-15" />


      {isOpen && (
        <div ref={popupRef} 
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-800/60 via-purple-700/30 to-indigo-900/10 backdrop-blur-sm z-50">
        <div className="bg-gradient-to-br from-yellow-700 to-purple-900 p-8 rounded-lg shadow-lg w-full lg:max-w-[32vw] max-h-[80vh] overflow-auto border-2 overflow-x-hidden border-blue-400 text-white">
      
      

        <h2 className="text-3xl font-bold text-center mb-6 pb-5">Beräkna din kostnad</h2>

            {/* Antal kurser */}
            <div className="mb-4">
              <label className="block font-medium text-lg mb-2">Välj paket:</label>
              {KursAlternativ.map((kurs, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between border-2 p-3 mb-2  text-black  rounded-lg cursor-pointer transition 
                    ${valtPaket === kurs.namn ? "border-green-500 bg-green-200 text-black" : "border-green-400 bg-white hover:bg-green-200 hover:text-black"}`}
                  onClick={() => setValtPaket(kurs.namn)} // Spara valt paket
                >
                  <span className='font-semibold'>{kurs.namn}</span>
                  <span className="font-semibold">{kurs.pris} SEK</span>
                </div>
              ))}
            </div>

            {/* Språkalternativ */}
            <div className="mb-4">
              <label className="block font-medium text-lg mb-2 pt-5">Språk:</label>
              {språkAlternativ.map((s, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between border-2 p-3 mb-2  text-black  rounded-lg cursor-pointer transition 
                    ${valdaSprak.includes(s.namn) ? "border-green-500 bg-green-200 text-black" : "border-green-400 bg-white hover:bg-green-200"}`}
                  onClick={() => toggleSprak(s.namn)}
                >
                  <span className='font-semibold'>{s.namn}</span>
                  <span className="font-semibold">{s.pris} :-</span>
                </div>
              ))}
            </div>

            {/* Färdigt material */}
            <div className="mb-4">
              <label className="block font-medium pb-3 pt-5">Har du färdigt material?</label>
              <select 
                value={fardigtMaterial} 
                onChange={(e) => setFardigtMaterial(e.target.value)}
                className="w-full p-3 border rounded-md text-black bg-white"
              >
                <option className="text-black " value="">Välj</option>
                <option className="text-black" value="Ja">Ja, jag har färdigt material.</option>
                <option className="text-black" value="Nej">Nej, vi behöver ta fram material tillsammans.</option>
                <option className="text-black" value="NästanAllt">Vi har en större del material.</option>
                </select>
            </div>

            {/* Checkboxar för design */}
            <div className="mb-4">
              <label className="block font-medium mb-2 pt-5">Typ av design:</label>
              {designAlternativ.map((d, index) => (
                <div 
                  key={index} 
                  className={`flex items-center text-black justify-between border-2 p-3 mb-2 rounded-lg cursor-pointer transition font-semibold
                    ${valdaDesigner.includes(d.namn) ? "border-green-500 bg-green-200 text-black" : "border-green-300 bg-white hover:bg-green-300"}`}
                  onClick={() => toggleDesign(d.namn)}
                >
                  <span>{d.namn}</span>
                </div>
              ))}
            </div>

            {/* Beräkna kostnad-knapp */}
            <button 
              onClick={beräknaKostnad} 
              className="w-full bg-blue-500 text-black py-3 rounded-md hover:bg-blue-600 transition font-semibold"
            >
              Beräkna kostnad
            </button>

            {/* Laddningsindikator */}
            {loading ? (
  <div className="flex justify-center mt-6">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
) : (
  kostnad > 0 && (
    <>
      <h2 className="text-center text-2xl font-bold mt-6 text-white pb-10">
        Ditt estimerade pris är: {kostnad} SEK
      </h2>
      <div className="relative rounded-full px-3 py-1 text-large text-yellow-500 ring-2 ring-gray-900/60 hover:ring-gray-900/20">
        Är du nöjd med det estimerade priset?{' '}
        <a href="/contact" className="font-semibold text-indigo-600">
          <span aria-hidden="true" className="absolute inset-0 hover:text-blue-500" />
          Kontakta oss idag <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </>
  )
)}
            
            
            {/* Stäng-knapp */}
            <button 
              onClick={handleClose}
              className="w-full bg-red-500 text-black py-3 rounded-md mt-6 hover:bg-red-600 transition font-semibold"
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kalkylator;
