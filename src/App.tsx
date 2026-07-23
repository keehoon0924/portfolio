import { useEffect, useState } from "react";
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
import { OnlyeyeDetail } from "./components/onlyeye/OnlyeyeDetail";

type DetailKind = "tonefit" | "cheongyeon" | "onlyeye";

export default function App() {
  const [detail, setDetail] = useState<DetailKind | null>(null);

  // 상세 오버레이가 열리면 배경(body) 스크롤을 잠가 스크롤바가 하나만 보이게 한다.
  useEffect(() => {
    if (!detail) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [detail]);

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
      {detail === "onlyeye" && (
        <OnlyeyeDetail onClose={() => setDetail(null)} />
      )}
      <WipPopup />
    </>
  );
}
