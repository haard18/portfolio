import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import Devmode from "./Devmode";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import haard from '../data/images/haard3.png'
import Navbar from "@/components/Navbar";

const Home = () => {
  const [devMode, setDevMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("Initializing...");

  const loadingPhrases = [
    "Initializing...",
    "Hacking the matrix...",
    "Rewriting the mainframe...",
    "Powering up dev mode...",
    "Ready to code!",
  ];

  useEffect(() => {
    if (isLoading) {
      let phraseIndex = 0;
      const phraseInterval = setInterval(() => {
        setLoadingPhrase(loadingPhrases[phraseIndex]);
        phraseIndex = (phraseIndex + 1) % loadingPhrases.length;
      }, 1000);

      return () => clearInterval(phraseInterval);
    }
  }, [isLoading]);

  const handleSwitchChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDevMode(!devMode);
      setIsLoading(false);
      console.log("Switch toggled:", !devMode);
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
          <div className="w-64 h-2 border-2 bg-gray-300 mb-4">
            <div className="h-full bg-green-500 animate-loading-bar"></div>
          </div>
          <div className="text-2xl text-green-500">{loadingPhrase}</div>
        </div>
      ) : (
        !devMode ? (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6">
                Hello!<br />
                Haard Here!
              </h1>
                <p className="text-3xl">Full Stack Developer to web3 enthusiast</p>
              <div className="text-2xl pt-5">
                Get into the Rabit Hole!
              </div>
              <div className="mt-4">
                <Switch id="Dev-Mode" onClick={handleSwitchChange} />
                <label htmlFor="Dev-Mode" className="text-lg mt-2 block">Hack the web</label>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 mr-5">
              <img src={haard} alt="Haard" className="hidden md:block w-3/4 h-auto" />
            </div>
            <div className="flex flex-col gap-4 p-7">
              <a href="https://x.com/solanki_haard" target="_blank" className="flex gap-1 items-center" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-blue-500 hover:text-blue-700 text-2xl" />
                <p className="text-xl">solanki_haard</p>
              </a>
              <a href="https://github.com/haard18" target="_blank" className="flex items-center gap-1" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600 text-2xl" />
                <p className="text-xl">haard18</p>
              </a>
              <a href="https://www.linkedin.com/in/haard-solanki-66084826a/" className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900 text-2xl" />
                <p className="text-xl">haard-solanki</p>
              </a>
              <a href="https://instagram.com/haard.solanki" className="flex gap-1 items-center" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700 text-2xl" />
                <p className="text-xl">haard.solanki</p>
              </a>
              <a href="https://www.youtube.com/@haardsolanki9398" className="flex gap-1 items-center" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-700 hover:text-blue-700 text-2xl" />
                <p className="text-xl">solanki_haard</p>
              </a>
            </div>
          </div>
        ) : (
          <Devmode />
        )
      )}
    </div>
  );
};

export default Home;
