import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="shadow-sm border-b border-green-100 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white font-bold">
            AV
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">AgriValue Hub</span>
            <span className="text-xs text-gray-500">Value-Added Agriculture Platform</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#clients" className="hover:text-green-600">Our Clients</a>
          <a href="#learn" className="hover:text-green-600">Training</a>
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/login" className="text-gray-700 hover:text-green-600 font-medium">
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-green-500 px-4 py-2 text-white font-semibold shadow-sm hover:bg-green-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
