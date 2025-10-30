import { Link } from 'react-router-dom';
import Container from './common/Container';
import { ThemeToggle } from './common/ThemeToggle';

const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Link to="/">
            <div className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300 flex items-center justify-center font-bold text-xl">
              H
            </div>
          </Link>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
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
