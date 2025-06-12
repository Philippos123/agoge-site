import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Kalkylator = () => {
  const [antalKurser, setAntalKurser] = useState(0);
  const [valdaSprak, setValdaSprak] = useState([]); 
  const [fardigtMaterial, setFardigtMaterial] = useState('');
  const [valdaDesigner, setValdaDesigner] = useState([]);
  const [kostnad, setKostnad] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [valtPaket, setValtPaket] = useState('');
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(popupRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => {
          setIsOpen(false);
        },
      });
    }
  }, [isOpen]);

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
    { namn: "Enkel lösning", pris: 15000 },
    { namn: "Enkel lösning + integration", pris: 22000 },
    { namn: "Full lösning med white label och domän", pris: 30000 },
  ];

  const språkAlternativ = [
    { namn: "1-20", pris: 0 },
    { namn: "21-40", pris: 500 },
    { namn: "41-60", pris: 400 },
    { namn: "61-80", pris: 600 },
    { namn: "80+", pris: 700 }
  ];

  const designAlternativ = [
    { namn: "Enkel", pris: 0 },
    { namn: "Avancerad", pris: 3000 },
  ];

  const toggleSprak = (sprak) => {
    setValdaSprak((prev) =>
      prev.includes(sprak)
        ? prev.filter((s) => s !== sprak)
        : [...prev, sprak]
    );
  };

  const toggleDesign = (design) => {
    setValdaDesigner((prev) =>
      prev.includes(design)
        ? prev.filter((d) => d !== design)
        : [...prev, design]
    );
  };

  const beräknaKostnad = () => {
    setLoading(true);
  
    setTimeout(() => {
      let totalKostnad = 0;
  
      const paket = KursAlternativ.find((k) => k.namn === valtPaket);
      if (paket) {
        totalKostnad += paket.pris;
        
        if (fardigtMaterial === "Nej") {
          totalKostnad += paket.pris * 0.5;
        }
      
        if (fardigtMaterial === "NästanAllt") {
          totalKostnad += paket.pris * 0.1;
        }
      }
        
      valdaSprak.forEach((sprak) => {
        totalKostnad += språkAlternativ.find((s) => s.namn === sprak)?.pris || 0;
      });
  
      if (fardigtMaterial === "Nej") totalKostnad += 200;
  
      valdaDesigner.forEach((design) => {
        totalKostnad += designAlternativ.find((d) => d.namn === design)?.pris || 0;
      });
  
      setKostnad(totalKostnad);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="kalkylator text-center mt-10 lg:mt-10">
      <h2 className="text-4xl font-extrabold text-gray-400 mb-6 pb-10 transform transition duration-500 ease-in-out hover:scale-105 hover:text-[#967a26] pt-15">
        Testa vår onboarding kalkylator
      </h2>
      
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-md border-b-4 border-green-700 shadow-xl shadow-primary-400/20 px-3.5 py-2.5 font-semibold text-gray-300  focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-xl duration-200"
      >
        Kalkylera mitt program
      </button>
      
      <hr className="mt-8 border-t-2 border-gray-200 max-w-[70vw] mx-auto pb-15" />

      {isOpen && (
        <div ref={popupRef} 
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-bl from-black/10 to-agoge-500/10 backdrop-blur-sm z-50">
          <div className="bg-stone-900/50 p-8 rounded-lg shadow-lg w-full lg:max-w-[32vw] max-h-[80vh] overflow-auto border border-gray-200 text-gray-800">
            <h2 className="text-3xl font-bold text-center mb-6 pb-5 text-agoge-500">Beräkna din kostnad</h2>

            <div className="mb-4">
              <label className="block font-medium text-lg mb-2 pt-5 text-gray-300">Antal anställda</label>
              {språkAlternativ.map((s, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between border p-3 mb-2 rounded-lg cursor-pointer transition-all text-gray-400
                    ${valdaSprak.includes(s.namn) 
                      ? "border-[#0275ed] bg-blue-50 text-[#0275ed]" 
                      : "border-gray-200 hover:border-[#0275ed] hover:bg-blue-50"}`}
                  onClick={() => toggleSprak(s.namn)}
                >
                  <span className='font-semibold'>Vi är: {s.namn} anställda</span>
                </div>
              ))}
            </div>

            {/* Antal kurser */}
            <div className="mb-4">
              <label className="block font-medium text-lg mb-2 text-gray-300">Lösning:</label>
              {KursAlternativ.map((kurs, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between border p-3 mb-2 rounded-lg cursor-pointer transition-all text-gray-400 
                    ${valtPaket === kurs.namn 
                      ? "border-[#0275ed] bg-blue-50 text-[#0275ed]" 
                      : "border-gray-200 hover:border-[#0275ed] hover:bg-blue-50"}`}
                  onClick={() => setValtPaket(kurs.namn)}
                >
                  <span className='font-semibold'>{kurs.namn}</span>
                </div>
              ))}
            </div>

            {/* Språkalternativ */}
            

            {/* Färdigt material */}
            <div className="mb-4">
              <label className="block font-medium pb-3 pt-5 text-gray-400">Har du färdigt material?</label>
              <select 
                value={fardigtMaterial} 
                onChange={(e) => setFardigtMaterial(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0275ed] focus:border-transparent text-gray-400 "
              >
                <option className="text-black"value="">Välj</option>
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
                  className={`flex items-center justify-between border p-3 mb-2 rounded-lg cursor-pointer transition-all font-semibold text-gray-300
                    ${valdaDesigner.includes(d.namn) 
                      ? "border-[#967a26] bg-black text-[#967a26]" 
                      : "border-gray-200 hover:border-[#967a26] hover:bg-amber-50"}`}
                  onClick={() => toggleDesign(d.namn)}
                >
                  <span>{d.namn}</span>
                  <span>{d.pris > 0 ? `${d.pris} :-` : "Inkluderat"}</span>
                </div>
              ))}
            </div>

            {/* Beräkna kostnad-knapp */}
            <button 
              onClick={beräknaKostnad} 
              className="w-full bg-[#0275ed] text-white py-3 rounded-md hover:bg-blue-600 transition font-semibold"
              disabled={loading}
            >
              {loading ? "Beräknar..." : "Beräkna kostnad"}
            </button>

            {/* Laddningsindikator */}
            {loading ? (
              <div className="flex justify-center mt-6">
                <div className="w-10 h-10 border-4 border-[#0275ed] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              kostnad > 0 && (
                <>
                  <div className="text-center mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-[#967a26]">
                      Ditt estimerade pris är:
                    </h2>
                    <p className="text-3xl font-bold text-[#0275ed] mt-2">
                      {kostnad.toLocaleString('sv-SE')} SEK
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-gray-700 mb-2">
                      Är du nöjd med det estimerade priset?
                    </p>
                    <a 
                      href="/contact" 
                      className="inline-block font-semibold text-[#0275ed] hover:text-[#967a26] transition-colors"
                    >
                      Kontakta oss idag <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </>
              )
            )}
            
            {/* Stäng-knapp */}
            <button 
              onClick={handleClose}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-md mt-6 hover:bg-gray-300 transition font-semibold"
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