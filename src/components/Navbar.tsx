import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white text-black border border-gray-300 rounded-full shadow-md max-w-full mx-auto flex items-center p-3 lg:p-4 mb-10 mt-2">
      <ul className="flex justify-center w-full px-5 lg:space-x-8 space-x-4"> 
        
        <li>
          <Link to="/" className="hover:text-gray-600 transition-colors text-xs lg:text-sm font-medium">home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-600 transition-colors text-xs lg:text-sm font-medium">about</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-600 transition-colors text-xs lg:text-sm font-medium">projects</Link>
        </li>
        <li>
          <Link to="/achievements" className="hover:text-gray-600 transition-colors text-xs lg:text-sm font-medium">achievements</Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-gray-600 transition-colors text-xs lg:text-sm font-medium">resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
