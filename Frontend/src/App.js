import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useLocation } from 'react-router-dom';

import Home from "./RoutingPages/Home";
import Projects from "./RoutingPages/Projects";
import About from "./RoutingPages/About";
import Contact from "./RoutingPages/Contact";
import CursorTrail from "./Components/CustomCursor";

function App() {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);


  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
    (container) => {
      containerRef.current = container;
      window.particlesContainer = container;
    },
    [containerRef]
  );

  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      fullScreen: {
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 4 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        number: {
          value: 40,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
        },
      },
      detectRetina: true,
      retina_detect: true,
    };
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      <div className="App">
        <CursorTrail />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;































