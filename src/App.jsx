import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
function App() {
  return (
    <>
      <div className="h-[100vh] bg-[#FF876F] overflow-hidden rounded-bl-[250px]">
        <img src="/images/bg-pattern-intro-desktop.svg" className=" relative -top-[120px] " alt="" />
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <Features></Features>
    </>
  );
}

export default App;
