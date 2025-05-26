import Education from "./Education/Education";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import TerminalPage from "./Terminal/TerminalPage";
import { isMobile } from "react-device-detect";
export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="pt-1 snap-start h-screen">
        <Hero />
      </div>
      {!isMobile && (
        <div className="pt-1 snap-start h-screen">
          <TerminalPage />
        </div>
      )}
      <div className="pt-1 snap-start h-screen">
        <Education/>
      </div>
    <div className="pt-1 snap-start h-screen">
      <Projects/>
    </div>
    </div>
  );
}