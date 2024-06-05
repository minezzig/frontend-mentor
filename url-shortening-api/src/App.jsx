import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ShortenForm from "./components/ShortenForm";
import Info from "./components/Info";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
      AOS.init();
  return (

    <>
      <Nav />
      <Hero />
      <ShortenForm />
      <Info />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
