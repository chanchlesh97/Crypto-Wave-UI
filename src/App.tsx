import { Moon, Sun } from "lucide-react";
import "./App.css";
import Navbar from "./components/crypto-ui/Navbar";
import { Button } from "./components/ui/button";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar />
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
    </>
  );
}

export default App;
