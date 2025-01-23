import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white z-50">
      <div className="flex justify-between items-center px-6">
        {/* Home Button */}
        <NavLink
          to="/"
          className="text-blue-600 font-semibold text-lg hover:text-blue-800 transition duration-300"
        >
          Home
        </NavLink>

        {/* Header Title */}
        <h1 className="font-bold text-3xl uppercase text-center text-blue-600 hover:text-blue-800 transition duration-300">
          Welcome to Shwet Blogs!
        </h1>
      </div>
    </header>
  );
}
