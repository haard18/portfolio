import React, { useState, useEffect } from 'react';
import { getGithubStats } from '@/data/github';
import Home from './Home'; // Import Home component to switch back
import { projects } from '@/data/projects'; // Import your projects data

const guideText = `
Available commands:
  /projects   - List all projects and their descriptions
  /skills     - List all skills
  /about      - Show information about me
  /github     - Show my GitHub profile link
  clear      - Clear the terminal
  /back       - Return to the Home screen

Type a command and press Enter to execute it.
`;

const Devmode: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<{ command: string, output: string | JSX.Element }[]>([]);
  const [displayedGuide] = useState<string>('Welcome to the Devmode Terminal!\n\n' + guideText);
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
        setIsLoading('Loading projects...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate loading time

        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-transparent p-4 rounded-lg shadow-lg">
                <img src={project.image} alt={project.name} className="w-full h-32 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-semibold text-green-500">{project.name}</h2>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mr-4">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
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
      case 'clear':
        setHistory([]); // Clear history
        setInput('');    // Clear the input
        setIsLoading(null); // Stop loader
        return; // Early return to avoid adding 'clear' to history
      case '/back':
        setBackToHome(true); // Switch back to Home
        output = '';
        break;
      case '/shikha':
        setIsLoading('Sorting out Love');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = 'Haard Loves Shikha 3000';
        break
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

  const skills = ["React", "Node.js", "TypeScript", "Tailwind CSS"];
  const about = "I'm a web developer with experience in web3 and AI";

  if (backToHome) {
    return <Home />; // Return to Home component
  }

  return (
    <div className="bg-black text-green-500 p-10 font-mono h-screen overflow-y-auto tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      <div className="mb-10">
        {/* Guide Text */}
        <pre className="whitespace-pre-wrap break-words mb-10 text-green-500" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {displayedGuide}
        </pre>
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index}>
            <div className="text-green-500" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              $ {entry.command}
            </div>
            <pre className="whitespace-pre-wrap break-words" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {entry.output}
            </pre>
          </div>
        ))}
      </div>
      {isLoading ? (
        <div style={{ fontFamily: "'Orbitron', sans-serif" }}>
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
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          />
        </div>
      )}
    </div>
  );
};

export default Devmode;
