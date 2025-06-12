export const LMSFeatureShowcase = () => {
    // Features (Can Do)
    const capabilities = [
      "📊 Track employee progress in real-time",
      "🎯 Assign custom learning paths",
      "🏆 Gamify training with badges & leaderboards",
      "🤖 AI-powered course recommendations",
      "📱 Mobile-friendly access",
      "🔒 Role-based permissions"
    ];
  
    // Limitations (Can't Do)
    const limitations = [
      "❌ No offline mode (yet)",
      "❌ Doesn't replace 1:1 coaching",
      "❌ Can't auto-generate SCORM content"
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            What Agoge Can Do
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your all-in-one corporate learning platform
          </p>
        </div>
  
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Capabilities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
              <span className="p-1.5 rounded-full bg-green-100">
                ✓
              </span>
              Included Features
            </h3>
            <ul className="space-y-3">
              {capabilities.map((item, index) => (
                <li 
                  key={`can-${index}`} 
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg transition-all"
                >
                  <span className="text-lg">{item.split(" ")[0]}</span>
                  <span>{item.split(" ").slice(1).join(" ")}</span>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Limitations */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2 text-rose-600">
              <span className="p-1.5 rounded-full bg-rose-100">
                ✗
              </span>
              Current Limitations
            </h3>
            <ul className="space-y-3">
              {limitations.map((item, index) => (
                <li 
                  key={`cant-${index}`} 
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg transition-all"
                >
                  <span className="text-lg">{item.split(" ")[0]}</span>
                  <span className="text-gray-600">{item.split(" ").slice(1).join(" ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
            See Full Feature List
          </button>
        </div>
      </div>
    );
  };