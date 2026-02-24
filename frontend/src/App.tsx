import { useState } from "react";
import Chat from "./components/Chat";

function App() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">

  {/* HERO */}
<section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

  {/* Name */}
  <h1 className="text-5xl md:text-7xl font-bold mb-4">
    Vidhi Gupta
  </h1>

  {/* Role */}
  <p className="text-purple-300 uppercase tracking-widest text-sm mb-6">
    AI-Integrated Full Stack Developer
  </p>

  {/* Description */}
  <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed mb-10">
    Frontend Developer pursuing MCA at Banaras Hindu University.
    Specializing in building responsive web applications and integrating
    AI-powered features using React, FastAPI and OpenRouter.
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-4">
    <button
      onClick={() => {
  console.log("Button Clicked");
  setOpenChat(!openChat);
}}
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




  {/* SKILLS SECTION */}
  <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
  <div className="w-24 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
    <h2 className="text-3xl font-bold text-center mb-10">Technical Expertise</h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
        <p>HTML5, CSS3, JavaScript (ES6), React</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold mb-4">Backend & AI</h3>
        <p>Python, FastAPI, OpenRouter API Integration</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold mb-4">Database & Tools</h3>
        <p>SQL, MySQL, Git, GitHub, VS Code</p>
      </div>
    </div>
  </section>
  {/* INTERNSHIP */}
<section className="py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    Internship Experience
  </h2>

  <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl">
    <h3 className="text-xl font-semibold mb-3">
      Data Analyst Intern – Elevate Labs
    </h3>

    <p className="text-gray-300 mb-4">
      May 2024 – June 2024
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Performed data cleaning and preprocessing using Python (NumPy).</li>
      <li>Created data visualizations using Matplotlib.</li>
      <li>Extracted actionable insights from datasets.</li>
      <li>Collaborated using Git and GitHub workflow.</li>
    </ul>
  </div>
</section>
{/* LIVE PROJECT */}
<section className="py-20 px-6 bg-black/30">
  <h2 className="text-3xl font-bold text-center mb-10">
    Live Client Project
  </h2>

  <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl">
    <h3 className="text-xl font-semibold mb-3">
      The Weds Memories
    </h3>

    <p className="text-gray-300 mb-4">
      Designed, developed and deployed a live production website
      for a client. Built responsive UI and handled full deployment.
    </p>

    <a
      href="https://www.thewedsmemories.com"
      target="_blank"
      className="text-purple-400 underline"
    >
      Visit Live Website
    </a>
  </div>
</section>
{/* AI PORTFOLIO FEATURE */}
<section className="py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    AI-Powered Resume Assistant
  </h2>

  <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl">
    <p className="text-gray-300 leading-relaxed">
      This portfolio integrates an AI assistant built using FastAPI and OpenRouter.
      The assistant answers questions strictly based on my resume data.
      It uses structured prompt engineering to prevent hallucinated responses
      and ensures professional, accurate communication.
    </p>
  </div>
</section>

{/* ARCHITECTURE OVERVIEW */}
<section className="py-20 px-6 bg-black/40">
  <h2 className="text-3xl font-bold text-center mb-12">
    Architecture Overview
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-4">Frontend</h3>
      <p className="text-gray-300">
        React with TypeScript. Responsive UI built using Tailwind CSS.
        Handles user interaction and communicates with backend APIs.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-4">Backend</h3>
      <p className="text-gray-300">
        FastAPI-based REST API handling resume logic,
        prompt engineering and OpenRouter integration.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-4">AI Engine</h3>
      <p className="text-gray-300">
        OpenRouter (Mistral 7B). Strict resume-based prompt control
        to prevent hallucinated responses.
      </p>
    </div>

  </div>
</section>

{/* UNIQUE VALUE SECTION */}
<section className="py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">
    Why This Portfolio Is Different
  </h2>

  <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl space-y-6 text-gray-300 leading-relaxed">

    <p>
      Unlike traditional static portfolios, this website includes an AI-powered
      resume assistant capable of answering technical and professional
      questions in real-time.
    </p>

    <p>
      The AI is carefully controlled using structured prompt engineering,
      ensuring responses are strictly derived from resume data.
      This prevents misinformation and demonstrates responsible AI usage.
    </p>

    <p>
      The project showcases full-stack development skills,
      API integration, deployment readiness, and system architecture design.
    </p>

  </div>
</section>


{/* CONTACT */}
<section className="py-20 px-6 bg-black/30">
  <h2 className="text-3xl font-bold text-center mb-10">
    Contact
  </h2>

  <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-4">
    <p>Email: vidhigupta0528@gmail.com</p>
    <p>Location: Boda, Madhya Pradesh</p>

    <div className="flex justify-center gap-6 mt-6">
      <a href="https://github.com/YOUR_GITHUB" target="_blank" className="underline text-purple-400">
        GitHub
      </a>

      <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="underline text-purple-400">
        LinkedIn
      </a>
    </div>
  </div>
</section>
     {openChat && (
  <div className="fixed bottom-6 right-6 z-50">
    <Chat setOpenChat={setOpenChat} />
  </div>

)}
  

    </div>
  );
}

export default App;