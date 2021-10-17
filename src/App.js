import NavbarPopular from "./components/NavbarPopular";
import Carousel from "./components/Carousel";
import NavbarFreeWatch from "./components/NavbarFreeWatch";

function App() {
  return (
    <div>       
      <NavbarPopular />
      <Carousel />
      <NavbarFreeWatch />      
      <Carousel />
    </div>
  );
}

export default App;
