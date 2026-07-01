import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tools } from "./components/Tools";
import { Stats } from "./components/Stats";
import { TonefitCase } from "./components/tonefit/TonefitCase";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <Stats />
        <TonefitCase />
      </main>
    </>
  );
}
