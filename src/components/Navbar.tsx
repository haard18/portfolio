import { Link } from 'react-router-dom';
import Container from './common/Container';
import { ThemeToggle } from './common/ThemeToggle';

const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/">
            <div className="font-bold text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
              HS
            </div>
          </Link>
          <div className="hidden md:flex items-center justify-center gap-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/resume"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
