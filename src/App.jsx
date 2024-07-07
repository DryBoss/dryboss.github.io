import { useState } from "react";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };
  return <>{renderCurrentPage()}</>;
}

export default App;
