import React, { useState, useEffect } from 'react';
import { getGithubStats } from '@/data/github';

const guideText = `


Available commands:
  /projects   - List all projects and their descriptions
  /skills     - List all skills
  /about      - Show information about me
  /github     - Show my GitHub profile link

Type a command and press Enter to execute it.
`;

const Devmode: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<{ command: string, output: string | JSX.Element }[]>([]);
  const [displayedGuide, setDisplayedGuide] = useState<string>('Welcome to the Devmode Terminal!\n\n' + guideText);

  const handleCommand = async () => {
    let output: string | JSX.Element = '';
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
        const githubImageUrl = await getGithubStats('haard18'); // Replace 'haard18' with your GitHub username
        output = <img src={githubImageUrl} alt="GitHub Stats" />;
        break;
      default:
        output = 'Command not found';
        break;
    }
    setHistory([...history, { command: input, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const projects: { name: string; description: string }[] = [
    { name: "Project 1", description: "This is the first project" },
    { name: "Project 2", description: "This is the second project" },
    { name: "Project 3", description: "This is the third project" },
  ];

  const skills = ["React", "Node.js", "TypeScript", "Tailwind CSS"];
  const about = "I'm a web developer with experience in web3 and AI.";
  const github = "https://github.com/haard18";

  return (
    <div style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', fontFamily: 'monospace', height: '100vh', overflowY: 'auto' }}>
      <div style={{ marginBottom: '10px' }}>
        {/* Guide Text */}
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', marginBottom: '10px', color: '#0f0' }}>
          {displayedGuide}
        </pre>
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
