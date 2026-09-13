import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import MainNav from "./components/layout/MainNav";
import Techs from "./components/layout/Techs";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <main className="bg-gray-100">
        <MainNav />
        <Hero />
        <Techs />
      </main>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
