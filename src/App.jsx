import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Integrantes } from "./components/members";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Integrantes />
    </div>
  );
}

export default App;