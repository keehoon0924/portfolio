import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tools } from "./components/Tools";
import { Work } from "./components/Work";
import { Closing } from "./components/Closing";
import { Contact } from "./components/Contact";
import { WipPopup } from "./components/WipPopup";
import { TonefitDetail } from "./components/tonefit/TonefitDetail";

export default function App() {
  const [tonefitOpen, setTonefitOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <Work onOpenTonefit={() => setTonefitOpen(true)} />
        <Closing />
        <Contact />
      </main>
      {tonefitOpen && <TonefitDetail onClose={() => setTonefitOpen(false)} />}
      <WipPopup />
    </>
  );
}
