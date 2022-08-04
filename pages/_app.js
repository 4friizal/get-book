import "../styles/globals.css";
import { TokenContext, ThemeContext } from "../utils/context";
// import { Provider } from "react-redux";
import { useEffect, useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getToken = localStorage.getItem("token") || "0";
    setToken(getToken);
  }, [token]);

  if (token) {
    return (
      <TokenContext.Provider value={jwtToken}>
        <ThemeContext.Provider value={background}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </TokenContext.Provider>
    );
  }
}

export default MyApp;
