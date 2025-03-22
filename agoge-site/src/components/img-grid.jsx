export default function ImgGrid() {
    return (
        <div className="relative w-[100vw] ">
            {/* Video (Ligger längst bak) */}
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover brightness-30 z-0" 
                autoPlay 
                loop 
                muted
            >
                <source src="/test-video.mp4" type="video/mp4" />
            </video>

            {/* Grid som ligger ovanpå videon */}
            <div className="relative  grid grid-cols-3 gap-4 py-28 w-[90%] max-w-[900px] mx-auto">
            <div className="bg-black/70 z-10 text-white text-center rounded-r-2xl py-3 ps-3 border-r-2 border-b-1 border-b-purple-300 border-r-indigo-400 shadow-2xl shadow-purple-300/50">
                <h3 className="text-left text-3xl ">Utveckling I top nivå!</h3>
                <p className="text-left"> Integer non enim vitae purus porttitor fringilla sit amet vel est. Pellentesque vitae tempus arcu.</p>
             </div>
                <div></div>
                <div className="bg-green-800 py-3 rounded-r-2xl text-white text-center">Hello World</div>
                <div className="col-span-2 bg-green-800 py-3 rounded-r-2xl text-white text-center"></div>
                <div className="bg-gray-500 p-3 text-white text-center">05</div>
                <div className="bg-gray-500 p-3 text-white text-center">06</div>
                <div className=" col-span-2 bg-black/70 z-10 text-white text-center rounded-l-2xl py-3 ps-3 border-l-2 border-b-1 border-b-purple-300 border-l-indigo-400 shadow-2xl shadow-purple-300/50">
                <h3 className="text-left text-3xl ">Utveckling I top nivå!</h3>
                <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor nisi ac felis accumsan viverra. Nunc ipsum ex, egestas et tortor eget, tincidunt condimentum elit. Nam sit amet scelerisque arcu.
                     Etiam vel pretium dolor, ultricies aliquet dolor. Integer non enim vitae purus porttitor fringilla sit amet vel est. Pellentesque vitae tempus arcu.</p>
             </div>
             <div className="col-span-3 bg-green-700"><h2>Hello!</h2></div>
             <div className="col-span-1 bg-black z-10 text-white text-center rounded-r-2xl py-3 ps-3 border-r-2 border-b-1 border-b-purple-300 border-r-indigo-400 shadow-2xl shadow-purple-300/50"><h2>Hello World!</h2>
             <p> Integer non enim vitae purus porttitor fringilla sit amet vel est. Pellentesque vitae tempus arcu.</p></div>
            </div>
        </div>
    );
}
