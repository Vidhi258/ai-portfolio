import { useState } from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
const Chat = ({ setOpenChat }: { setOpenChat: any }) => {
const [message, setMessage] = useState("");
const [chat, setChat] = useState<any[]>([]);
const [loading, setLoading] = useState(false);
const chatEndRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [chat]);
useEffect(() => {
  setChat([
    {
      role: "bot",
      text: "Hello. I am Vidhi's AI assistant. You may ask about her skills, experience or projects."
    }
  ]);
}, []);
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        question: message,
      });

      const reply =
  res.data?.choices?.[0]?.message?.content ??
  "AI service returned an unexpected response.";

      setChat([
        ...chat,
        { role: "user", text: message },
        { role: "bot", text: reply },
      ]);

    } catch (error) {
      setChat([
        ...chat,
        { role: "user", text: message },
        { role: "bot", text: "Unable to connect to AI service." },
      ]);
    }

    setMessage("");
    setLoading(false);
  };

  return (
<div className="w-[90%] md:w-96 max-w-md bg-white/10 backdrop-blur-lg border border-purple-500 text-white rounded-2xl shadow-2xl p-6 relative">
      <h2 className="font-semibold mb-3 text-purple-300">
        Ask Vidhi AI
      </h2>
      <button
      onClick={() => setOpenChat(false)}
      className="absolute top-3 right-4 text-white text-sm">
      ✕</button>
      <div className="h-64 overflow-y-auto mb-4 space-y-3 text-sm flex flex-col">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg max-w-[80%] ${
              c.role === "user"
                ? "bg-purple-600 self-end ml-auto"
                : "bg-gray-700 self-start"
            }`}
          >
            {c.text}
            
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <input
        className="w-full p-2 rounded-lg bg-black/40 border border-purple-400 text-white text-sm focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about my skills..."
      />

      <button
        className="w-full mt-2 bg-purple-600 hover:bg-purple-700 transition p-2 rounded-lg text-sm"
        onClick={sendMessage}
      >
       {loading ? (
  <span className="animate-pulse">Thinking...</span>
) : (
  "Send"
)}
      </button>

    </div>
  );
};

export default Chat;