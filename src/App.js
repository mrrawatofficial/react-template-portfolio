import "./assets/css/app.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <SimpleReactLightbox>
        <Portfolio />
      </SimpleReactLightbox>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
