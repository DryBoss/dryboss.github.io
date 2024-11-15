import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import PageTransition from "./pages/page-transition/PageTransition";

function App() {
  const [currentPage, setCurrentPage] = useState("Hi, I am Taiham");
  const [showTransition, setShowTransition] = useState(true);
  let animation = "none";

  const timer = setTimeout(() => {
    setShowTransition(false);
    clearTimeout(timer);
  }, 2000);

  // Trigger PageTransition when currentPage changes
  useEffect(() => {
    setShowTransition(true);
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 3000); // Duration of the transition (1 second here)

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, [currentPage]);

  return (
    <>
      {showTransition && (
        <PageTransition title={currentPage} animation={animation} />
      )}
      {currentPage == "Hi, I am Taiham" ? <Home /> : ""}
    </>
  );
}

export default App;
