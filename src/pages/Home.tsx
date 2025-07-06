// import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import Devmode from "./Devmode";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import haard from "../data/images/hardy.png";
import Navbar from "@/components/Navbar";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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
      }, 400);

      return () => clearInterval(phraseInterval);
    }
  }, [isLoading]);

  const handleSwitchChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDevMode(!devMode);
      setIsLoading(false);
      console.log("Switch toggled:", !devMode);
    }, 2000);
  };

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
          <div className="w-64 h-2 border-2 bg-gray-300 mb-4">
            <div className="h-full bg-green-500 animate-loading-bar"></div>
          </div>
          <div className="text-2xl text-green-500">{loadingPhrase}</div>
        </div>
      ) : !devMode ? (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col overflow-hidden">
          <Navbar />

          <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6">
              hello!
              <br />
              haard here!
            </h1>
            <p className="text-3xl">
              full-stack engineer diving deep into web3 infrastructure
            </p>
            <p className="text-2xl">
              currently shipping at goldPesa — defi, tokenomics & beyond
            </p>
            <div className="text-2xl pt-5">get into the rabbit hole!</div>
            <div className="mt-4">
              <AwesomeButton onPress={handleSwitchChange} type="secondary">
                hack the web
              </AwesomeButton>
            </div>
          </div>
          <div className="absolute pl-20 bottom-0 right-0">
            <img
              src={haard}
              alt="Haard"
              className="hidden sm:hidden md:block md:w-4/5 lg:w-4/5 h-auto"
            />
          </div>

          <div className="flex flex-col gap-4 p-7">
            <a
              href="https://x.com/solanki_haard"
              target="_blank"
              className="flex gap-1 items-center"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-blue-500 hover:text-blue-700 text-2xl"
              />
              <p className="text-xl">solanki_haard</p>
            </a>
            <a
              href="https://github.com/haard18"
              target="_blank"
              className="flex items-center gap-1"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-800 hover:text-gray-600 text-2xl"
              />
              <p className="text-xl">haard18</p>
            </a>
            <a
              href="https://www.linkedin.com/in/haard-solanki-66084826a/"
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-700 hover:text-blue-900 text-2xl"
              />
              <p className="text-xl">haard-solanki</p>
            </a>

            <a
              href="https://www.youtube.com/@haardsolanki9398"
              className="flex gap-1 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-red-700 hover:text-blue-700 text-2xl"
              />
              <p className="text-xl">solanki_haard</p>
            </a>
          </div>
        </div>
      ) : (
        <Devmode />
      )}
    </div>
  );
};

export default Home;
