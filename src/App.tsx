import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { TonefitFeatured } from "./components/TonefitFeatured";
import { TonefitPreview } from "./components/TonefitPreview";
import { SelectedWork } from "./components/work/SelectedWork";
import { Notes } from "./components/Notes";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <TonefitFeatured />
        <TonefitPreview />
        <SelectedWork />
        <Notes />
        <Contact />
      </main>
    </>
  );
}
