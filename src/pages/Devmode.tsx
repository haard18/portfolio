import React, { useState, useEffect } from "react";
import { getGithubStats } from "@/data/github";
import Home from "./Home"; // Import Home component to switch back
import { projects } from "@/data/projects"; // Import your projects data
import "./dev.css";

const guideText = `
Available commands:
  /projects   - List all projects and their descriptions
  /skills     - List all skills
  /about      - Show information about me
  /github     - Show my GitHub profile link
  clear      - Clear the terminal
  /report - Access classified files
  /back       - Return to the Home screen

Type a command and press Enter to execute it.
`;

const Devmode: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<
    { command: string; output: string | JSX.Element }[]
  >([]);
  const [displayedGuide] = useState<string>(
    "Welcome to the Devmode Terminal!\n\n" + guideText
  );
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [backToHome, setBackToHome] = useState<boolean>(false);
  const [loadingAnimation, setLoadingAnimation] = useState<string>(""); // State for animation

  useEffect(() => {
    if (isLoading) {
      const animationInterval = setInterval(() => {
        setLoadingAnimation((prev) => (prev === "..." ? "" : prev + "."));
      }, 500); // Adjust the speed of the animation (500ms per dot)

      return () => clearInterval(animationInterval); // Clear interval on cleanup
    } else {
      setLoadingAnimation(""); // Reset animation when not loading
    }
  }, [isLoading]);

  const handleCommand = async () => {
    let output: string | JSX.Element = "";
    switch (input.trim()) {
      case "/projects":
        setIsLoading("Loading projects...");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate loading time

        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-transparent p-4 rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-green-500">
                  {project.name}
                </h2>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mr-4"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "/skills":
        setIsLoading("Installing skills package");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = skills.join("\n");
        break;
      case "/about":
        setIsLoading("Installing about package");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = about;
        break;
      case "/github":
        setIsLoading("Installing GitHub package");
        const githubImageUrl = await getGithubStats("haard18"); // Replace 'haard18' with your GitHub username
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = <img src={githubImageUrl} alt="GitHub Stats" />;
        break;
      case "clear":
        setHistory([]); // Clear history
        setInput(""); // Clear the input
        setIsLoading(null); // Stop loader
        return; // Early return to avoid adding 'clear' to history
      case "/back":
        setBackToHome(true); // Switch back to Home
        output = "";
        break;
      case "/shikhaaa":
        setIsLoading("Sorting out Love");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate installation time
        output = "Haard Loves Shikha 3000";
        break;
      case "/report":
        setIsLoading("Accessing classified files");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate red tape
        output = (
          <div className="whitespace-pre-wrap break-words text-red-500">
            {`[CLASSIFIED REPORT — CIA INTERNAL DOSSIER]
        
        Subject: Haard Solanki  
        Codename: ORBITRON  
        Status: Person of High Interest  
        
        Summary:
        - Displays unconventional ingenuity in frontend/backend systems (e.g., terminal-mode UI, GitHub stat integrations, on-chain applications).
        - Demonstrates potential for high-impact disruption in decentralized finance, cryptographic identity, and digital labor verification frameworks.
        - Risk Level: Variable. Controlled ambition with flashes of mania and acute focus dilation.
        
        Behavioral Markers:
        - Embeds sentimentally volatile triggers in dev environments. Exploitable under sustained psychological mapping.
        - Tracks and reacts to real-time GitHub stats, system usage, and productivity metrics—indicative of recursive self-surveillance and self-optimization rituals.
        - Exhibits a “construct-to-cope” reflex under stress—building systems faster than oversight can adapt.
        - Displays paradoxical behavior: intense solo autonomy yet heavy reliance on peer accountability via public artifacts (e.g., podcast, YouTube, social coding).
        - Tends to leave behavioral signatures in architecture: code is clean, modular, and often meta-aware (e.g., systems that audit other systems).
        - Prone to over-scoping projects into ecosystems—suggests a worldbuilder impulse, not a feature developer.
        
        Operational Threat:
        - Operates under a techno-darwinist ethos—will not hesitate to automate, anonymize, or abstract human processes if they’re inefficient.
        - Susceptible to ideological detours if they appear technically elegant or intellectually “correct.”
        - Open source tendencies offer visibility, but only superficially. Strategic intent often obfuscated under humor or minimal documentation.
        
        Strategic Assessment:
        Subject is a wildcard asset. Align or monitor. No in-between.
        Could be groomed into a state-aligned innovator—or become a founder of the next digital rogue state.
        Recommend placement on Active Watch Tier-2 with passive data feeds from all on-chain deployments and behavioral drift indicators.
        
        [End of Report]`}
          </div>
        );
        
        break;

      case "ls":
        // Simulated directory listing
        output = (
          <div className="whitespace-pre-wrap break-words">
            {`projects  skills  about  github`}
          </div>
        );
        break;
      default:
        setIsLoading("Processing command");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate processing time
        output = "Command not found";
        break;
    }

    setHistory([...history, { command: input, output }]);
    setInput("");
    setIsLoading(null); // Stop loader
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  const skills = [
    "MERN",
    "Solidity",
    "Web3",
    "AI",
    "ML",
    "C++",
    "Problem Solving",
  ];
  const about = "I'm a web developer with experience in web3 and AI";

  if (backToHome) {
    return <Home />; // Return to Home component
  }

  // Determine whether to apply the blinking cursor style
  const cursorClass = input === "" ? "cursor-blink" : "";

  return (
    <div
      className="bg-black text-green-500 p-10 font-mono h-screen overflow-y-auto tracking-widest"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <div className="mb-10">
        {/* Guide Text */}
        <pre
          className="whitespace-pre-wrap break-words mb-10 text-green-500"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {displayedGuide}
        </pre>
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index}>
            <div
              className="text-green-500"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              hardy $ {entry.command}
            </div>
            <pre
              className="whitespace-pre-wrap break-words"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
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
          hardy${" "}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`bg-transparent text-green-500 border-none outline-none w-90 ${cursorClass}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          />
        </div>
      )}
    </div>
  );
};

export default Devmode;
