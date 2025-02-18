import React from 'react';

const Aboutus = () => {

    return (
        <div className="align-center rounded-2xl bg-gray-500/20 py-24 sm:py-32 mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 sm-bg-gray-100 lg:grid-cols-2">
  <div className="text-center xl:col-span-2">
    <h1 className="text-3xl text-gray-100 font-semibold">Agoge</h1>
    <div className="text-gray-300 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 pt-10">
      <p className=' text-sm leading-relaxed bg-yellow-700 rounded-lg p-4'>
        Agoge AB är ett innovativt företag som fokuserar på att hjälpa organisationer att visualisera och analysera data på ett effektivt och insiktsfullt sätt. Med hjälp av avancerade teknologier som Python och maskininlärning, erbjuder Agoge skräddarsydda lösningar för att omvandla stora datamängder till värdefulla insikter som kan driva beslut och förbättra affärsresultat.
      </p>
      <p className='text-sm leading-relaxed bg-yellow-700 rounded-lg p-4'>
        Vi använder Python, ett av de mest kraftfulla och flexibla programmeringsspråken för dataanalys, tillsammans med maskininlärning för att utveckla modeller och algoritmer som kan förutsäga trender, upptäcka mönster och ge djuplodande insikter i komplexa datasätt. Genom att utnyttja dessa teknologier kan vi skapa visualiseringar som gör det lättare för företag att förstå sina data och fatta mer informerade beslut.
      </p>
      <p className='text-sm leading-relaxed bg-yellow-700 rounded-lg p-4'>
        Agoge AB:s expertis sträcker sig över hela dataprocessen – från insamling och förbehandling av data till avancerad analys och visualisering. Vi arbetar nära våra kunder för att identifiera deras specifika behov och implementera lösningar som kan hjälpa dem att utnyttja sina data på bästa möjliga sätt.
      </p>
      <p className='text-sm leading-relaxed bg-yellow-700 rounded-lg p-4 shadow-lg'>
        Vår vision är att hjälpa företag att fullt ut förstå och dra nytta av sina data genom kraftfulla visualiseringar och maskininlärning. Vi strävar efter att vara en ledande partner för organisationer som vill framtidssäkra sina verksamheter genom datadrivna beslut och insikter.
      </p>
    </div>
    <img src="/Logotyp-Agoge.png" alt="Agoge Logotyp" className="mx-auto max-w-xs"/>
  </div>
</div>

    );
    };

export default Aboutus;




