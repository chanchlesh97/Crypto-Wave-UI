import "./App.css";
import Home from "./components/crypto-ui/Home";
import Navbar from "./components/crypto-ui/Navbar";

function App() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar />
      <Home />
      {/* <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Button> */}
    </>
  );
}

export default App;
