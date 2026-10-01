import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Integrantes } from "./components/members";
import { Discography } from "./components/discography";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Integrantes />
      < Discography />
    </div>
  );
}

export default App;