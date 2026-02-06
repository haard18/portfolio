import { Link } from 'react-router-dom';
import Container from './common/Container';
import { ThemeToggle } from './common/ThemeToggle';

const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 py-4 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8 md:gap-10">
          <Link to="/">
            <div className="font-bold text-2xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
              HS
            </div>
          </Link>
          <div className="hidden md:flex items-center justify-center gap-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
            >
              About
            </Link>
            <Link
              to="/resume"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
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
