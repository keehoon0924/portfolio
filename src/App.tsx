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
import { CheongyeonDetail } from "./components/cheongyeon/CheongyeonDetail";

type DetailKind = "tonefit" | "cheongyeon";

export default function App() {
  const [detail, setDetail] = useState<DetailKind | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <Work onOpenDetail={setDetail} />
        <Closing />
        <Contact />
      </main>
      {detail === "tonefit" && (
        <TonefitDetail onClose={() => setDetail(null)} />
      )}
      {detail === "cheongyeon" && (
        <CheongyeonDetail onClose={() => setDetail(null)} />
      )}
      <WipPopup />
    </>
  );
}
