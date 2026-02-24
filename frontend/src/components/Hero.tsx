<section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[90vh] overflow-hidden">
<div className="absolute w-80 h-80 bg-purple-600 opacity-20 blur-3xl rounded-full -z-10"></div>
  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  AI-Integrated Full Stack Developer
</h1>
  <p className="text-purple-300 uppercase tracking-widest text-sm mb-6">
  React • TypeScript • FastAPI • AI Integration
</p>
  <p className="max-w-2xl text-gray-300 text-sm md:text-lg leading-relaxed">
    MCA student at Banaras Hindu University with hands-on experience in
    HTML, CSS, JavaScript and React. I build responsive web applications
    and integrate AI-powered features using modern full-stack technologies.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-8">
    <span className="bg-purple-700/40 border border-purple-500 px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition">
      React
    </span>
    <span className="bg-purple-700/40 border border-purple-500 px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition">
      TypeScript
    </span>
    <span className="bg-purple-700/40 border border-purple-500 px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition">
      Python
    </span>
    <span className="bg-purple-700/40 border border-purple-500 px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition">
      SQL
    </span>
  </div>

  <div className="flex gap-4 mt-10">
    <button
      onClick={() => setOpenChat(!openChat)}
      className="bg-purple-600 px-8 py-3 rounded-lg hover:bg-purple-700 transition shadow-lg"
    >
      Ask My AI Assistant
    </button>

    <a
      href="/Vidhi Resume.pdf"
      download
      className="bg-white text-purple-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition shadow-lg"
    >
      Download Resume
    </a>
  </div>

</section>