import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import MainNav from "./components/layout/MainNav";
import Techs from "./components/layout/Techs";

function App() {
  return (
    <>
      <main className="bg-gray-100">
        <MainNav />
        <Hero />
        <Techs />
      </main>
      <Footer />
    </>
  );
}

export default App;
