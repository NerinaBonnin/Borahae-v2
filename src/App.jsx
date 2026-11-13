import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Integrantes } from "./components/members";
import { Discography } from "./components/discography";
import {Performance} from "./components/performances";
import { ExperienciaSonora } from "./components/experiencias";
import { Army } from "./components/army";
import { Lyrics } from "./components/lyrics"; 

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Integrantes />
            <Discography />
            <Performance />
            <ExperienciaSonora />
            <Army />
            <Lyrics />
        </div>
    );
}

export default App;