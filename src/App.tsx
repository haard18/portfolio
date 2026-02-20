import Home from './pages/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import About from './pages/About';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { AnimatePresence, motion } from 'framer-motion';
import { ease } from './lib/motion';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: '/', element: <Home /> },
          { path: '/projects', element: <Projects /> },
          { path: '/about', element: <About /> },
          { path: '/achievements', element: <Achievements /> },
          { path: '/resume', element: <Resume /> },
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div {...pageTransition}>{element}</motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <AnimatedRoutes />
        <InteractiveTerminal />
      </div>
    </BrowserRouter>
  );
}

export default App;
