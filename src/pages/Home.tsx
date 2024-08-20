import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import Devmode from "./Devmode";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import haard from '../data/images/haard3.png'
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
    <div className="flex flex-col" style={{ fontFamily: "'Edu VIC WA NT Beginner', sans-serif" }}>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="w-64 h-2 border-2 bg-gray-300 mb-4">
            <div className="h-full bg-green-500 animate-loading-bar"></div>
          </div>
          <div className="text-2xl text-green-500">{loadingPhrase}</div>
        </div>
      ) : (
        !devMode ? (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen">
            <div className="flex text-9xl p-7">
              Hello!<br />
              Haard Here!
            </div>
            <br />
            <div className="flex right-0 top-0 bottom-0 mr-5 absolute">
              <img src={haard} alt="Haard" />
            </div>
            <div className="text-2xl pt-5 flex flex-col p-7">
              Ready To Switch On Dev Mode?
              <Switch id="Dev-Mode" onClick={handleSwitchChange} />
              <label htmlFor="Dev-Mode">Go Dev Mode</label>
            </div>
            <div className="flex flex-col gap-7 p-7 mt-10">

              <a href="https://x.com/solanki_haard" target="_blank" className="flex gap-1 items-center" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-blue-500 hover:text-blue-700 text-5xl" />
                <p className="text-2xl">solanki_haard</p>
              </a>
              <a href="https://github.com/haard18" target="_blank" className="flex items-center gap-1" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600 text-5xl" />
                <p className="text-2xl">haard18</p>
              </a>
              <a href="https://www.linkedin.com/in/haard-solanki-66084826a/" className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900 text-5xl" />
                <p className="text-2xl">haard-solanki</p>
              </a>
              <a href="https://instagram.com/haard.solanki" className="flex gap-1 items-center" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700 text-5xl" />
                <p className="text-2xl">haard.solanki</p>
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
//projects/writings/achievements/timeline