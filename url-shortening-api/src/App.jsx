import Nav from "./components/Nav"
import Hero from "./components/Hero"
import ShortenForm from "./components/ShortenForm"
import Info from "./components/Info"
import Boost from "./components/Boost"
import Footer from "./components/Footer"
function App() {


  return (
    <>

    <section className="flex flex-col items-center overflow-hidden">
      <header className="w-full bg-white">
        <Nav />
      </header>
      <section>
        <Hero />
      </section>
      <section className="w-full">
        <ShortenForm />
      </section>
      <section className="w-full">
        <Info/>
      </section>
      <section className="w-full">
        <Boost/>
      </section>
      <section className="w-full">
        <Footer/>
      </section>
      
    
        
   
      
 
      


        

    </section>
    </>
  )
}

export default App
