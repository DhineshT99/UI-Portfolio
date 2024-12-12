import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skill/Skills";
import WorkExperience from "./components/Work Experience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
      </div>
    </>
  );
}

export default App;
