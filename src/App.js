import GoldenNavbar from "./components/Navbar";
import GoldenMarquee from "./components/GoldenMarquee";
import Footer from "./components/Footer";
import PorductsContainer from "./components/PorductsContainer";
import Statistics from "./components/Statistics";
import Divisions from "./components/DivisionsComp";
import TailwindElementsCarousal from "./components/TailwindElementsCarousal";
import ServicesComp from "./components/ServicesComp";
import Map from "./components/GoldenMap";


function App() {
  return (
    <>
      <GoldenNavbar />
      <TailwindElementsCarousal />
      <Divisions/>
      <ServicesComp/> 
      <PorductsContainer />
      <GoldenMarquee />
      <Statistics />
      <Map/> 
      <Footer />
    </>
  );
}

export default App;
