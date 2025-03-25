import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CybersecurityTraining from "./components/Training/HardTrain";
import LiveGraphs from "./components/Graph";
import About from "./components/About";
import Intro from "./components/Intro";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/training", element: <CybersecurityTraining /> },
  { path: "/graph", element: <LiveGraphs /> },
]);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the Intro after animation completes (adjust time if needed)
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 4 seconds (match with animation duration)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <Intro />
      ) : (
        <div>
          <Navbar />
          <RouterProvider router={appRouter} />
        </div>
      )}
    </>
  );
}

export default App;
