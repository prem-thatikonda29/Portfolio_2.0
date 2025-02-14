import { useState } from "react";
import Loading from "./organs/Loading";
import NameAnimation from "./organs/NameAnimation";
import Landing from "./organisms/Landing";
import About from "./organisms/About";
import Projects from "./organisms/Projects";
import Cursor from "./organs/Cursor";
import Tech from "./organisms/Tech";
import Contact from "./organisms/Contact";
import Footer from "./organisms/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Cursor />
          <NameAnimation />
          <Landing />
          <About />
          <Projects />
          <Tech />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
