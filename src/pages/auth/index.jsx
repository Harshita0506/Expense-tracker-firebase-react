import { auth } from "../../config/firebase-config";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";

export function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/expense-tracker");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const signInWithGoogle = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });

      const result = await signInWithPopup(auth, provider);

      const authInfo = {
        userID: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));

      setLoading(false);
      navigate("/expense-tracker");
    } catch (error) {
      console.error("Google Sign-In Failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <p>Sign In With Google to Continue</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      )}
    </div>
  );
}
