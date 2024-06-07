import Header from "./components/Header";
import Hero from "./components/Hero";
import Differences from "./components/Differences";
import Testimonials from "./components/Testimonials";
import Simplify from "./components/Simplify";
import Footer from "./components/Footer";
import blob from "./assets/images/bg-tablet-pattern.svg";

function App() {
  const bgStyle = {
    backgroundImage: `URL(${blob})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "local",
    backgroundPosition: "right -130px top -200px",
  };

  return (
    <main style={bgStyle}>
      <Header />
      <Hero />
      <Differences />
      <Testimonials />
      <Simplify />
      <Footer />
    </main>
  );
}

export default App;
