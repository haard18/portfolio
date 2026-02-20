import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

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
      '  help      Show this help message',
      '  about     Learn about Haard',
      '  skills    List technical skills',
      '  projects  View projects',
      '  contact   Get contact information',
      '  resume    Open resume page',
      '  github    Open GitHub profile',
      '  clear     Clear terminal',
    ],
    about: () => [
      'Haard Solanki - Backend & Blockchain Engineer',
      '',
      'Founding engineer at Elcara, building agentic systems',
      'and market infrastructure. Backend engineer at WhiteBeard,',
      'shipping core trading systems. DeFi protocol specialist.',
    ],
    skills: () => [
      'Technical Stack:',
      '',
      '  Languages   Rust, TypeScript, Solidity, Python',
      '  Backend     Node.js, Express, Fastify, Prisma',
      '  Blockchain  Ethers.js, Anchor, DeFi Protocols',
      '  Data        PostgreSQL, Redis, MongoDB',
      '  Infra       Docker, Kubernetes, AWS, CI/CD',
    ],
    projects: () => [
      'Featured Projects:',
      '',
      '  Elcara      Agentic systems, market infra, AI tools',
      '  WhiteBeard  Trading infra, risk management, blockchain',
      '',
      'Visit /projects for full list',
    ],
    contact: () => [
      'Contact:',
      '',
      '  Email     haardsolanki.itm@gmail.com',
      '  Twitter   @solanki_haard',
      '  LinkedIn  haard-solanki',
      '  GitHub    haard18',
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
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.toLowerCase().split(' ');

    let output: string[];
    if (commands[command]) {
      output = commands[command](args);
    } else {
      output = [`Command not found: ${command}`, 'Type "help" for available commands.'];
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
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
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
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-colors"
        title="Open Terminal"
      >
        <TerminalIcon className="w-4 h-4" />
      </button>

      {/* Terminal window */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 z-50 w-[480px] max-w-[calc(100vw-2.5rem)] h-[360px] rounded-lg border border-border bg-card flex flex-col font-mono text-xs shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border">
            <span className="text-muted-foreground text-[11px]">
              haard@portfolio ~
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Content */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-3 text-foreground custom-scrollbar"
          >
            <div className="text-muted-foreground mb-3">
              Type &apos;help&apos; for available commands.
            </div>

            {history.map((cmd, i) => (
              <div key={i} className="mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">$</span>
                  <span>{cmd.input}</span>
                </div>
                {cmd.output.length > 0 && (
                  <div className="mt-1 text-muted-foreground whitespace-pre">
                    {cmd.output.map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Input */}
            <div className="flex items-center gap-1.5">
              <span className="text-accent">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none border-none"
                autoComplete="off"
                spellCheck={false}
              />
              <div className="w-1.5 h-3.5 bg-foreground/60 animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
