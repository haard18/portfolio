import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Achievements from './pages/Achivements';
import About from './pages/About';
import Resume from './pages/Resume';
import { ThemeProvider } from './components/common/ThemeProvider';
import Navbar from './components/Navbar';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { AIAssistant } from './components/AIAssistant';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/achievements"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Achievements />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Resume />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    console.log(
      '%c🚀 Welcome to Haard\'s Portfolio!',
      'color: #0ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #0ff;'
    );
    console.log(
      '%c💻 Built with React + TypeScript + Vite',
      'color: #61dafb; font-size: 14px;'
    );
    console.log(
      '%c🎨 Styled with Tailwind CSS + Framer Motion',
      'color: #06b6d4; font-size: 14px;'
    );
    console.log(
      '%c✨ Try typing "help" in the terminal (click the terminal icon)!',
      'color: #a855f7; font-size: 14px;'
    );
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navbar />
          <AnimatedRoutes />
          <InteractiveTerminal />
          <AIAssistant />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
