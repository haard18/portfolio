import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface Command {
  input: string;
  output: string[];
}

export const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, (args: string[]) => string[]> = {
    help: () => [
      'Available commands:',
      '  help           - Show this help message',
      '  about          - Learn about Haard',
      '  skills         - List technical skills',
      '  projects       - View projects',
      '  contact        - Get contact information',
      '  resume         - Download resume',
      '  github         - Open GitHub profile',
      '  clear          - Clear terminal',
      '  easter-egg     - Find the hidden surprise',
      '  matrix         - Enter the matrix',
    ],
    about: () => [
      'Haard Solanki - Full Stack Engineer',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Specializing in Web3, Backend Development, and System Design',
      'Currently building DeFi solutions at goldPesa',
      '',
      'Passionate about creating scalable, decentralized applications',
      'and pushing the boundaries of modern web technology.',
    ],
    skills: () => [
      'Technical Stack:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '🔹 Frontend: React, Next.js, TypeScript, Tailwind CSS',
      '🔹 Backend: Node.js, Express, C#, .NET',
      '🔹 Web3: Solidity, Ethereum, DeFi Protocols',
      '🔹 Databases: PostgreSQL, MongoDB, Redis',
      '🔹 DevOps: Docker, AWS, CI/CD',
      '🔹 Tools: Git, VS Code, Postman',
    ],
    projects: () => [
      'Featured Projects:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. SENTIO - End-to-End Pipeline with Security & Monitoring',
      '2. DumDumDeploy - Arweave Deployment Tool',
      '3. Churn-O-Analyzer - ML-based Customer Analytics',
      '4. Evencio - Blockchain-based Ticketing Platform',
      '',
      'Type "projects --detail [number]" for more info',
    ],
    contact: () => [
      'Contact Information:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '📧 Email: haardsolanki.itm@gmail.com',
      '🐦 Twitter: @solanki_haard',
      '💼 LinkedIn: haard-solanki',
      '🐙 GitHub: haard18',
      '',
      'Feel free to reach out for collaborations!',
    ],
    github: () => {
      window.open('https://github.com/haard18', '_blank');
      return ['Opening GitHub profile...'];
    },
    resume: () => {
      window.location.href = '/resume';
      return ['Navigating to resume...'];
    },
    clear: () => {
      setHistory([]);
      return [];
    },
    'easter-egg': () => [
      '🎉 You found the easter egg!',
      '',
      '   ___________',
      '  /           \\',
      ' |  ^ ^   ^ ^  |',
      ' |             |',
      '  \\   \\_____/ /',
      '   -----------',
      '',
      'Achievement Unlocked: Curious Explorer',
    ],
    matrix: () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテト';
      const lines = Array(10).fill('').map(() => 
        Array(50).fill('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
      );
      return [
        'Entering the Matrix...',
        '',
        ...lines,
        '',
        'Wake up, Neo...',
      ];
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.toLowerCase().split(' ');
    
    let output: string[];
    if (commands[command]) {
      output = commands[command](args);
    } else {
      output = [
        `Command not found: ${command}`,
        'Type "help" for available commands.',
      ];
    }

    setHistory([...history, { input: trimmedCmd, output }]);
    setCommandHistory([...commandHistory, trimmedCmd]);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <>
      {/* Floating Terminal Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-black border-2 border-green-500 rounded-lg shadow-lg hover:bg-gray-900 transition-all hover:scale-110"
        title="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6 text-green-400" />
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[600px] max-w-[90vw] h-[500px] bg-black border-2 border-green-500 rounded-lg shadow-2xl flex flex-col font-mono text-sm">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b-2 border-green-500">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-green-400" />
              <span className="text-green-400">haard@portfolio:~$</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setHistory([])}
                className="px-2 py-1 text-xs bg-yellow-500 text-black rounded hover:bg-yellow-400"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-400"
              >
                Close
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-4 text-green-400 custom-scrollbar"
          >
            <div className="mb-4 text-green-300">
              Welcome to Haard's Portfolio Terminal v1.0
              <br />
              Type 'help' for available commands.
              <br />
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </div>

            {history.map((cmd, i) => (
              <div key={i} className="mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">$</span>
                  <span className="text-white">{cmd.input}</span>
                </div>
                {cmd.output.length > 0 && (
                  <div className="mt-1 ml-4 text-green-300">
                    {cmd.output.map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none border-none"
                autoComplete="off"
                spellCheck={false}
              />
              <div className="w-2 h-4 bg-green-400 animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
