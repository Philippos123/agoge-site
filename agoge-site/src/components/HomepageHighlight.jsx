import { color } from 'motion';
import { useState } from 'react';

const HomepageHighlight = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <section className="py-20 rounded-2xl relative overflow-hidden mb-[30vh] border border-gray-600 ">
      {/* Aceternity-style floating gradient blobs (background) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-agoge-500/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-float-delay"></div>

      {/* Animated Tabs */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex p-1 bg-primary-100 rounded-full border border-gray-600 shadow-inner">
        <button 
            onClick={() => setActiveTab('philosophy')}
            className={`px-6 py-2 rounded-full transform transition-all hover:scale-105 active:scale-95 ${
              activeTab === 'philosophy' 
                ? 'bg-gradient-to-r from-agoge-500/40 to-agoge-600/10  text-white shadow-lg'
                : 'text-gray-300 hover:bg-gradient-to-r from-agoge-500/40 to-agoge-600/30'
            }`}
          >
            Our Philosophy
          </button>
          
          <button 
            onClick={() => setActiveTab('system')}
            className={`px-6 py-2 rounded-full transform transition-all hover:scale-105 active:scale-95 ${
              activeTab === 'system' 
                ? 'bg-gradient-to-l to-primary-500/60 from-primary/60 stone-600 text-white shadow-lg'
                : 'text-gray-100 hover:bg-gradient-to-l from-primary-500/60 to-primary/60'
            }`}
          >
            Agoge Hub
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* System Features (shown when activeTab === 'system') */}
        <div className={`${activeTab === 'system' ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {[
              {
                icon: "🤹‍♂️",
                title: "Something for Everyone",
                desc: "Courses for all levels",
                gradient: "from-agoge-500 to-agoge-700"
              },
              {
                icon: "📈",
                title: "Proven Results",
                desc: "40% productivity boost",
                gradient: "from-agoge-500 to-agoge-700"
              },
              {
                icon: "📚",
                title: "500 Courses",
                desc: "Wide range of subjects",
                gradient: "from-agoge-500 to-agoge-700",
              }
            
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-6 border border-gray-600 shadow-2xl shadow-primary/20 rounded-xl hover:shadow-lg transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity ${item.gradient}`}></div>
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className={`text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                  {item.title}
                </h3>
                <p className="text-gray-300 relative z-10">{item.desc}</p>
                
                <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity bg-gradient-to-br ${item.gradient}`}></div>
              </div>
            ))}
            <div className="md:col-span-3 flex justify-center mt-8"> {/* Lägger till en wrapper-div */}
            <a
                href="/onboarding"
                className="rounded-md border-blue-200/40 border-2 shadow-xl shadow-primary-400/20 px-3.5 py-2.5 text-m font-semibold text-gray-100  focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-xl  duration-200 "
              >
                Get started with Agoge Hub
              </a>
      </div>
          </div>
        </div>


        {/* Philosophy Panel (shown when activeTab === 'philosophy') */}
        <div className={`${activeTab === 'philosophy' ? 'block' : 'hidden'} text-center px-4`}>
          <blockquote className="text-2xl italic text-gray-300 mb-6 relative">
            <span className="absolute -left-6 text-4xl text-agoge-500">"</span>
            We believe curiosity is the engine of professional evolution.
            <span className="absolute -right-6 text-4xl text-agoge-500">"</span>
          </blockquote>
          
          <div className=" bg-primary/10 p-8 rounded-xl border border-gray-600 backdrop-blur-sm">
            <p className="text-lg text-gray-300">
              Agoge isn't just another LMS—we're building a culture where 
              <span className="font-bold text-transparent bg-clip-text bg-agoge-500">
                {" "}learning never stops
              </span>.
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles (optional) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-agoge-500/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HomepageHighlight;