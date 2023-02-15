import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";
import Pricing from "pages/Pricing";
import ButtonScroll from "component/ButtonScroll";
function App() {
  return (
    <div>
      <Home />
      <Pricing />
      <About />
      <Contact />
      <ButtonScroll />
    </div>
  );
}

export default App;
