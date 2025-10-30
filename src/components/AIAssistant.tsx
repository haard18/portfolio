import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Sparkles, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// Knowledge base for the AI assistant
const knowledgeBase = {
  greeting: [
    "Hey there! 👋 I'm Haard's AI assistant. Ask me anything about his projects, skills, or experience!",
    "Hello! I'm here to help you learn more about Haard. What would you like to know?",
    "Hi! I'm Haard's digital familiar. Feel free to ask me about his work in Web3, backend development, or any projects!",
  ],
  
  projects: {
    sentio: "SENTIO is an end-to-end pipeline with security, audit, and monitoring capabilities. Built with modern DevOps practices and deployed on Arweave network. It features automated security scanning, real-time monitoring, and comprehensive logging.",
    dumdumdeploy: "DumDumDeploy is a simple deployment tool for deploying projects on Arweave. It simplifies the process of deploying decentralized applications to the permaweb with an intuitive CLI interface.",
    churn: "Churn-O-Analyzer is a customer churn analysis platform for the telecom industry using machine learning. It predicts customer churn with high accuracy and provides actionable insights for retention strategies.",
    evencio: "Evencio is a blockchain-based ticketing platform that brings transparency and security to event ticketing. It prevents scalping and fraud through smart contracts and NFT-based tickets.",
  },

  skills: {
    frontend: "Haard is proficient in React, Next.js, TypeScript, and Tailwind CSS. He builds responsive, performant web applications with modern best practices.",
    backend: "Strong expertise in Node.js, Express, C#, and .NET. Experience with microservices architecture, REST APIs, and GraphQL.",
    web3: "Deep knowledge of Solidity, Ethereum, and DeFi protocols. Has built multiple blockchain applications and smart contracts.",
    databases: "Experienced with PostgreSQL, MongoDB, and Redis. Skilled in database design, optimization, and scaling.",
    devops: "Proficient in Docker, AWS, CI/CD pipelines, and infrastructure as code.",
  },

  experience: "Haard is currently working as a Full Stack Engineer at goldPesa, where he's building DeFi solutions and working on tokenomics infrastructure. He has experience with blockchain development, backend systems, and system design. He's also an active open-source contributor and hackathon winner.",

  contact: "You can reach Haard via:\n• Email: haardsolanki.itm@gmail.com\n• Twitter: @solanki_haard\n• GitHub: haard18\n• LinkedIn: haard-solanki\n\nFeel free to reach out for collaborations or opportunities!",
};

const generateResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // Greetings
  if (message.match(/^(hi|hello|hey|sup|greetings)/)) {
    return knowledgeBase.greeting[Math.floor(Math.random() * knowledgeBase.greeting.length)];
  }

  // Projects
  if (message.includes('sentio')) {
    return knowledgeBase.projects.sentio;
  }
  if (message.includes('dumdum') || message.includes('deploy')) {
    return knowledgeBase.projects.dumdumdeploy;
  }
  if (message.includes('churn')) {
    return knowledgeBase.projects.churn;
  }
  if (message.includes('evencio') || message.includes('ticket')) {
    return knowledgeBase.projects.evencio;
  }
  if (message.includes('project')) {
    return "Haard has built several impressive projects including:\n\n• SENTIO - Security & monitoring pipeline\n• DumDumDeploy - Arweave deployment tool\n• Churn-O-Analyzer - ML-based analytics\n• Evencio - Blockchain ticketing platform\n\nWhich one would you like to know more about?";
  }

  // Skills
  if (message.includes('frontend') || message.includes('react') || message.includes('next')) {
    return knowledgeBase.skills.frontend;
  }
  if (message.includes('backend') || message.includes('node') || message.includes('c#')) {
    return knowledgeBase.skills.backend;
  }
  if (message.includes('web3') || message.includes('blockchain') || message.includes('solidity')) {
    return knowledgeBase.skills.web3;
  }
  if (message.includes('database') || message.includes('sql')) {
    return knowledgeBase.skills.databases;
  }
  if (message.includes('skill') || message.includes('tech stack') || message.includes('technologies')) {
    return "Haard's tech stack includes:\n\n🎨 Frontend: React, Next.js, TypeScript, Tailwind\n⚙️ Backend: Node.js, Express, C#, .NET\n⛓️ Web3: Solidity, Ethereum, DeFi\n💾 Databases: PostgreSQL, MongoDB, Redis\n☁️ DevOps: Docker, AWS, CI/CD\n\nWhat specific area interests you?";
  }

  // Experience
  if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('goldpesa')) {
    return knowledgeBase.experience;
  }

  // Contact
  if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return knowledgeBase.contact;
  }

  // About
  if (message.includes('about') || message.includes('who is')) {
    return "Haard Solanki is a Full Stack Engineer specializing in Web3, backend development, and system design. He's currently building DeFi solutions at goldPesa. Passionate about blockchain, decentralized applications, and creating scalable systems. He's also an active open-source contributor and loves solving complex technical challenges!";
  }

  // Default response
  return "I can help you learn about Haard's:\n• Projects (SENTIO, DumDumDeploy, etc.)\n• Skills & Technologies\n• Work Experience\n• Contact Information\n\nWhat would you like to know more about?";
};

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send initial greeting
      setTimeout(() => {
        addAssistantMessage(knowledgeBase.greeting[0]);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addAssistantMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'assistant',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
    setIsTyping(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Generate and add assistant response
    setTimeout(() => {
      const response = generateResponse(input);
      addAssistantMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="Chat with AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-[400px] max-w-[90vw] h-[600px] bg-card border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <div className="relative">
                <Bot className="w-8 h-8" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 opacity-70`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-foreground/40 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-foreground/40 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-foreground/40 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-full border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
