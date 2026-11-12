import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Integrantes } from "./components/members";
import { Discography } from "./components/discography";
import {Performance} from "./components/performances";
import { ExperienciaSonora } from "./components/experiencia"; 

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Integrantes />
            <Discography />
            <Performance />
            <ExperienciaSonora />
        </div>
    );
}

export default App;