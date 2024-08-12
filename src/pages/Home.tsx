import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import Devmode from "./Devmode";

const Home = () => {
  const [devMode, setDevMode] = useState(false);

  const handleSwitchChange = () => {
    setDevMode(!devMode);
    console.log("Switch toggled:", !devMode);
  };

  return (
    <div className="flex flex-col " style={{ fontFamily: "'Edu VIC WA NT Beginner', sans-serif" }}>
      {!devMode &&
        <>
          <div className="flex text-9xl">
            Hello!<br />
            Haard Here!
          </div>

          <br />
          <div className="text-2xl pt-5 flex flex-col">
            Ready To Switch On Dev Mode?
            <Switch id="Dev-Mode" onClick={handleSwitchChange} />
            <label htmlFor="Dev-Mode">Go Dev Mode</label>
          </div>
        </>
      }
      {devMode && <Devmode />}
    </div>
  );
};

export default Home;
