import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CarouselComponent from "./Carouselcomponent";
import MapCards from "./components/MapCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CarouselComponent />
        <MapCards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
