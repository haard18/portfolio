import { Link } from 'react-router-dom';
import Container from './common/Container';
import { ThemeToggle } from './common/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-xs">
      <Container className="h-16 flex items-center justify-between px-4 md:px-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-8 md:gap-12">
          <Link to="/">
            <div className="font-semibold text-2xl text-foreground hover:text-accent transition-colors duration-200 hover:underline hover:underline-offset-4">
              HS
            </div>
          </Link>

          {/* Navigation Links - Desktop only */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-500 text-foreground/80 hover:text-foreground relative group transition-colors duration-200"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/projects"
              className="text-sm font-500 text-foreground/80 hover:text-foreground relative group transition-colors duration-200"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/about"
              className="text-sm font-500 text-foreground/80 hover:text-foreground relative group transition-colors duration-200"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/resume"
              className="text-sm font-500 text-foreground/80 hover:text-foreground relative group transition-colors duration-200"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
