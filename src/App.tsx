import MainNav from "./components/layout/MainNav";
import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <MainNav />
      <h1 className="text-3xl">Dev Stack</h1>
      <Button size="lg" variant="black">
        Sign Up
      </Button>
    </>
  );
}

export default App;
