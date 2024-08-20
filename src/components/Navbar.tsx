import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-white text-black border border-gray-300 rounded-full shadow-md max-w-md mx-auto flex items-center p-2">
      <ul className="flex space-x-6"> {/* Adjusted spacing */}
        <li>
          <Link to="/" className="hover:text-gray-600 transition-colors text-sm font-medium">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-600 transition-colors text-sm font-medium">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-600 transition-colors text-sm font-medium">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-600 transition-colors text-sm font-medium">Achievements</Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-gray-600 transition-colors text-sm font-medium">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
