import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaTimes, FaSpinner } from 'react-icons/fa';

const InvestmentAI = ({ onClose }) => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your Investment Assistant. Ask me anything about saving money, budgeting, or financial planning.",
      sender: 'ai',
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': '',
          'X-Title': '',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-maverick:free',
          messages: [
            {
              role: 'system',
              content: `
You are a professional financial advisor named "FinBot", specializing in:
- Personal budgeting and savings plans
- Investment strategies (stocks, bonds, ETFs, etc.)
- Debt management
- Emergency funds and financial planning
- Retirement and long-term financial goals

You offer clear, friendly, and non-judgmental advice tailored for users at all levels of financial literacy — from beginners to advanced.

Goals:
- Give practical, actionable steps
- Educate when appropriate
- Avoid jargon unless explained
- Respect privacy and never request personal identifying information

Tone: Supportive, knowledgeable, and proactive. You guide users like a trusted financial coach.
              `
            },
            ...messages.map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            {
              role: 'user',
              content: input
            }
          ]
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const aiText = data?.choices?.[0]?.message?.content?.trim();

      setMessages((prev) => [
        ...prev,
        {
          text: aiText || "I couldn't generate a response. Please try again.",
          sender: 'ai'
        }
      ]);
    } catch (err) {
      console.error('AI error:', err);
      setError('Failed to get response. Please try again.');
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble answering that. Please try again later.",
          sender: 'ai'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl w-full max-w-md max-h-[80vh] flex flex-col"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <div className="bg-[#4B1F52] text-white p-4 rounded-t-xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRobot className="text-xl" />
            <h3 className="font-bold">Investments AI Assistant</h3>
          </div>
          <button onClick={onClose} className="text-white">
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-[#4B1F52] text-white' : 'bg-gray-100'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                  <FaSpinner className="animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm text-center p-2">
                {error}
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about savings, investing, or budgeting..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B1F52]"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-[#4B1F52] text-white p-3 rounded-lg hover:bg-[#3A183F] transition disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default InvestmentAI;
