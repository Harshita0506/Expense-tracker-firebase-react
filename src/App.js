import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("auth");  // Clear localStorage if user not logged in
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={!isAuthenticated ? <Auth /> : <Navigate to="/expense-tracker" replace />} />
          <Route path="/expense-tracker" element={isAuthenticated ? <ExpenseTracker /> : <Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
