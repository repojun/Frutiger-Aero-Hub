import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from "react-toastify";

import Main from "./pages/main/Main";

// page content
import Resources from "./pages/content/Test/Resources";
import Home from "./pages/content/Home/Home";
import Weather from "./pages/content/Weather/Weather";
import About from "./pages/content/About/About";
import MSN from "./pages/content/MSN/MSN";
import Discover from "./pages/content/Bubbles/Discover";
import GuestBook from "./pages/content/GuestBook/GuestBook";
import Chat from "./pages/content/Chat/Chat";
import Project from "./pages/content/Project/Project";

const PageFade = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ position: "relative" }}>
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Flip} />

      <Main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageFade>
                  <Home />
                </PageFade>
              }
            />
            <Route
              path="/weather"
              element={
                <PageFade>
                  <Weather />
                </PageFade>
              }
            />
            <Route
              path="/about"
              element={
                <PageFade>
                  <About />
                </PageFade>
              }
            />
            <Route
              path="/resources"
              element={
                <PageFade>
                  <Resources />
                </PageFade>
              }
            />
            <Route
              path="/discover"
              element={
                <PageFade>
                  <Discover />
                </PageFade>
              }
            />
            <Route
              path="/guestbook"
              element={
                <PageFade>
                  <GuestBook />
                </PageFade>
              }
            />
            <Route
              path="/chatroom"
              element={
                <PageFade>
                  <Chat />
                </PageFade>
              }
            />
            <Route
              path="/project/:slug"
              element={
                <PageFade>
                  <Project />
                </PageFade>
              }
            />
            <Route path="/msn" element={<MSN />} />
          </Routes>
        </AnimatePresence>
      </Main>
    </>
  );
}

export default App;
