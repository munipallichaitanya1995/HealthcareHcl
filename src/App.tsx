import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify";
import Dashboard from "./components/Dashboard";
import HealthInformation from "./components/HealthInformation";
import HealthTopicDetail from "./components/HealthTopicDetail";
import HealthTopics from "./components/HealthTopics";
import HealthTopicDetailPage from "./components/HealthTopicDetailPage";
import Services from "./components/Services";
import Contact from "./components/Contact";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: "patient" | "provider";
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Check for existing auth token on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUserData = localStorage.getItem("userData");

    if (token && storedUserData) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLoginSuccess = (data: UserData) => {
    setIsAuthenticated(true);
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
    // After login, go directly to dashboard
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  // Determine if we should show header (on authenticated pages)
  const publicPages = ["/", "/login", "/register", "/verify"];
  const showHeader =
    isAuthenticated && !publicPages.includes(location.pathname);

  return (
    <div className="App">
      {/* Show Header on authenticated pages */}
      {showHeader && (
        <Header
          isAuthenticated={isAuthenticated}
          onLoginClick={handleLoginClick}
          onLogout={handleLogout}
        />
      )}

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <LandingPage onGetStarted={handleLoginClick} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        <Route path="/verify" element={<Verify />} />

        {/* Protected Routes - Require auth */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated && userData ? (
              <Dashboard userName={userData.name} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Health Information - Secondary pages */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HealthInformation />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/health-info/:id"
          element={
            isAuthenticated ? (
              <HealthTopicDetail />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/health-topics"
          element={
            isAuthenticated ? (
              <HealthTopics />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/health-topics/:id"
          element={
            isAuthenticated ? (
              <HealthTopicDetailPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/services"
          element={
            isAuthenticated ? <Services /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/contact"
          element={
            isAuthenticated ? <Contact /> : <Navigate to="/login" replace />
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Show Footer on authenticated pages */}
      {showHeader && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
