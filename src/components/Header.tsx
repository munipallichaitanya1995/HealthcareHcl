import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isAuthenticated: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Header: FC<HeaderProps> = ({
  isAuthenticated,
  onLoginClick,
  onLogout,
}) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => navigate(isAuthenticated ? "/home" : "/")}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Health Care Portal
              </h1>
            </div>
          </div>

          {/* Navigation - Only show when authenticated */}
          {isAuthenticated && (
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate("/home")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
              >
                Health Info
              </button>
              <button
                onClick={() => navigate("/health-topics")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
              >
                Health Topics
              </button>
              <button
                onClick={() => navigate("/services")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
              >
                Contact
              </button>
            </nav>
          )}

          {/* Login/Register Button */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation - Only show when authenticated */}
        {isAuthenticated && (
          <div className="md:hidden pb-3 pt-2">
            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium rounded-lg transition duration-150 ease-in-out text-left"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate("/home")}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium rounded-lg transition duration-150 ease-in-out text-left"
              >
                Health Info
              </button>
              <button
                onClick={() => navigate("/health-topics")}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium rounded-lg transition duration-150 ease-in-out text-left"
              >
                Health Topics
              </button>
              <button
                onClick={() => navigate("/services")}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium rounded-lg transition duration-150 ease-in-out text-left"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium rounded-lg transition duration-150 ease-in-out text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
