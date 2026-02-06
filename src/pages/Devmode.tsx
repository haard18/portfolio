import React, { useState, useEffect } from "react";
import { getGithubStats } from "@/data/github";
import Home from "./Home"; // Import Home component to switch back
import { motion, AnimatePresence } from "framer-motion";
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
        output = "Projects list available on the main portfolio page. Check /back to return.";
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
        output = (
          <motion.img
            src={githubImageUrl}
            alt="GitHub Stats"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        );
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

      case "/report":
        setIsLoading("Accessing classified files");
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate red tape
        output = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="whitespace-pre-wrap break-words text-red-500"
          >
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
        - Exhibits a "construct-to-cope" reflex under stress—building systems faster than oversight can adapt.
        - Displays paradoxical behavior: intense solo autonomy yet heavy reliance on peer accountability via public artifacts (e.g., podcast, YouTube, social coding).
        - Tends to leave behavioral signatures in architecture: code is clean, modular, and often meta-aware (e.g., systems that audit other systems).
        - Prone to over-scoping projects into ecosystems—suggests a worldbuilder impulse, not a feature developer.

        Operational Threat:
        - Operates under a techno-darwinist ethos—will not hesitate to automate, anonymize, or abstract human processes if they're inefficient.
        - Susceptible to ideological detours if they appear technically elegant or intellectually "correct."
        - Open source tendencies offer visibility, but only superficially. Strategic intent often obfuscated under humor or minimal documentation.

        Strategic Assessment:
        Subject is a wildcard asset. Align or monitor. No in-between.
        Could be groomed into a state-aligned innovator—or become a founder of the next digital rogue state.
        Recommend placement on Active Watch Tier-2 with passive data feeds from all on-chain deployments and behavioral drift indicators.

        [End of Report]`}
          </motion.div>
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
      className="bg-black text-green-500 p-10 font-mono min-h-screen overflow-y-auto tracking-widest relative"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      {/* Animated Matrix-style Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,0,0.1)_95%)] bg-[length:100%_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(0,255,0,0.1)_95%)] bg-[length:20px_100%]" />
      </div>

      {/* Subtle Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="mb-10 relative z-10">
        {/* Guide Text */}
        <motion.pre
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="whitespace-pre-wrap break-words mb-10 text-green-500"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {displayedGuide}
        </motion.pre>

        {/* Command History */}
        <AnimatePresence>
          {history.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-green-500"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  hardy $
                </motion.span>{" "}
                {entry.command}
              </div>
              <pre
                className="whitespace-pre-wrap break-words"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {entry.output}
              </pre>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Loading or Input */}
      <div className="relative z-10">
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {isLoading}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {loadingAnimation}
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              hardy$
            </motion.span>{" "}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`bg-transparent text-green-500 border-none outline-none w-90 ml-1 ${cursorClass}`}
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              autoFocus
            />
          </motion.div>
        )}
      </div>

      {/* Terminal Border Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none border-2 border-green-500/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Devmode;
