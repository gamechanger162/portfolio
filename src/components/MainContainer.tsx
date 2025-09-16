import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <div style={{display: 'block', width: '100%', height: '100px', backgroundColor: 'var(--backgroundColor)'}}></div>
            <div id="techstack" style={{position: 'relative', display: 'block', isolation: 'isolate', backgroundColor: 'var(--backgroundColor)', minHeight: '100vh'}}>
              <Suspense fallback={<div style={{color: 'white', textAlign: 'center', padding: '50px'}}>Loading TechStack...</div>}>
                <TechStack />
              </Suspense>
            </div>
            <div style={{display: 'block', width: '100%', height: '100px', backgroundColor: 'var(--backgroundColor)'}}></div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
