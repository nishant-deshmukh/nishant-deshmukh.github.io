import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./utils/theme";
import { showImplementations } from "./data/constants";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Implementations from "./components/Implementations";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CloudTrial from "./components/CloudTrial";

// Sections appear on the page in this order. Backgrounds alternate
// automatically between pale blue and white.
const sections = [
  About,
  Skills,
  Certifications,
  Experience,
  ...(showImplementations ? [Implementations] : []),
  Projects,
  Contact,
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <HeroSection />
        {sections.map((SectionComponent, index) => (
          <SectionComponent key={index} tone={index % 2 === 1 ? "white" : "pale"} />
        ))}
      </main>
      <Footer />
      <BackToTop />
      <CloudTrial />
    </ThemeProvider>
  );
}

export default App;
