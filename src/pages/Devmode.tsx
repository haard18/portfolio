import React, { useState, useEffect } from 'react';
import { getGithubStats } from '@/data/github';
import Home from './Home'; // Import Home component to switch back

const guideText = `
Available commands:
  /projects   - List all projects and their descriptions
  /skills     - List all skills
  /about      - Show information about me
  /github     - Show my GitHub profile link
  /clear      - Clear the terminal
  /back       - Return to the Home screen

Type a command and press Enter to execute it.
`;

const Devmode: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<{ command: string, output: string | JSX.Element }[]>([]);
  const [displayedGuide, ] = useState<string>('Welcome to the Devmode Terminal!\n\n' + guideText);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [backToHome, setBackToHome] = useState<boolean>(false);
  const [loadingAnimation, setLoadingAnimation] = useState<string>(''); // State for animation

  useEffect(() => {
    if (isLoading) {
      const animationInterval = setInterval(() => {
        setLoadingAnimation(prev => (prev === '...' ? '' : prev + '.'));
      }, 500); // Adjust the speed of the animation (500ms per dot)

      return () => clearInterval(animationInterval); // Clear interval on cleanup
    } else {
      setLoadingAnimation(''); // Reset animation when not loading
    }
  }, [isLoading]);

  const handleCommand = async () => {
    let output: string | JSX.Element = '';
    switch (input.trim()) {
      case '/projects':
        setIsLoading('Installing projects package');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = projects.map(p => `${p.name}: ${p.description}`).join('\n');
        break;
      case '/skills':
        setIsLoading('Installing skills package');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = skills.join('\n');
        break;
      case '/about':
        setIsLoading('Installing about package');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = about;
        break;
      case '/github':
        setIsLoading('Installing GitHub package');
        const githubImageUrl = await getGithubStats('haard18'); // Replace 'haard18' with your GitHub username
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = <img src={githubImageUrl} alt="GitHub Stats" />;
        break;
      case '/clear':
        setHistory([]); // Clear history
        setInput('');    // Clear the input
        setIsLoading(null); // Stop loader
        return; // Early return to avoid adding 'clear' to history
      case '/back':
        setBackToHome(true); // Switch back to Home
        output = '';
        break;
      default:
        setIsLoading('Processing command');
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate processing time
        output = 'Command not found';
        break;
    }

    setHistory([...history, { command: input, output }]);
    setInput('');
    setIsLoading(null); // Stop loader
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
  const about = "I'm a web developer with experience in web3 and AI";


  if (backToHome) {
    return <Home />; // Return to Home component
  }

  return (
    <div className="bg-black text-green-500 p-10 font-mono h-screen overflow-y-auto" style={{ fontFamily: "'Exo 2', sans-serif" }}>
      <div className="mb-10">
        {/* Guide Text */}
        <pre className="whitespace-pre-wrap break-words mb-10 text-green-500" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          {displayedGuide}
        </pre>
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index}>
            <div className="text-green-500" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              $ {entry.command}
            </div>
            <pre className="whitespace-pre-wrap break-words" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              {entry.output}
            </pre>
          </div>
        ))}
      </div>
      {isLoading ? (
        <div style={{ fontFamily: "'Exo 2', sans-serif" }}>
          {isLoading}
          {loadingAnimation}
        </div>
      ) : (
        <div>
          $ <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-green-500 border-none outline-none w-90"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          />
        </div>
      )}
    </div>
  );
};

export default Devmode;
