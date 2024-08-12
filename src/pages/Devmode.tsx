// src/components/Devmode.tsx
import React, { useState, KeyboardEvent } from 'react';

interface Project {
  name: string;
  description: string;
}

const guide = `
Welcome to the Devmode Terminal!

Available commands:
  /projects   - List all projects and their descriptions
  /skills     - List all skills
  /about      - Show information about me
  /github     - Show my GitHub profile link

Type a command and press Enter to execute it.
`;

const Devmode: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<{ command: string, output: string }[]>([]);

  const projects: Project[] = [
    { name: "Project 1", description: "This is the first project" },
    { name: "Project 2", description: "This is the second project" },
    { name: "Project 3", description: "This is the third project" },
  ];

  const skills = ["React", "Node.js", "TypeScript", "Tailwind CSS"];
  const about = "I'm a web developer with experience in web3 and AI.";
  const github = "https://github.com/yourusername";

  const handleCommand = () => {
    let output = '';
    switch (input.trim()) {
      case '/projects':
        output = projects.map(p => `${p.name}: ${p.description}`).join('\n');
        break;
      case '/skills':
        output = skills.join('\n');
        break;
      case '/about':
        output = about;
        break;
      case '/github':
        output = `GitHub: ${github}`;
        break;
      default:
        output = 'Command not found';
        break;
    }
    setHistory([...history, { command: input, output }]);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', fontFamily: 'monospace', height: '100vh', overflowY: 'auto' }}>
      <div style={{ marginBottom: '10px' }}>
        {/* Guide Text */}
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', marginBottom: '10px', color: '#0f0' }}>{guide}</pre>
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index}>
            <div>$ {entry.command}</div>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{entry.output}</pre>
          </div>
        ))}
      </div>
      <div>
        $ <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleKeyDown}
            style={{ backgroundColor: 'transparent', color: '#0f0', border: 'none', outline: 'none', width: '90%' }}
          />
      </div>
    </div>
  );
};

export default Devmode;
