import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg fixed w-full h-22 z-50 top-0">
      {" "}
      {/* z-index artırıldı */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-white"
          >
            BK MOBİL HABER
          </Link>

          <div className="flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-bold ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-400 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              Anasayfa
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-bold ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-400 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              Favoriler
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
