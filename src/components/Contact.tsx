import Highlighter from "@/components/Highlighter";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] text-center">
      <div className="mx-auto w-full max-w-[1160px] px-[30px] max-md:px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Let&apos;s work together
          </p>
          <h2 className="my-3.5 mb-7 text-[clamp(30px,5vw,58px)] font-extrabold tracking-[-0.025em]">
            함께 <Highlighter observe>성과</Highlighter>를 만들어요.
          </h2>
        </Reveal>
        <Reveal>
          <a
            href="mailto:kihoon.lee@example.com"
            className="contact-btn inline-flex items-center gap-2.5 rounded-md bg-ink px-[26px] py-[15px] font-mono text-sm text-paper"
          >
            ✉ kihoon.lee@example.com
          </a>
          <p className="mt-[26px] font-mono text-[13px] leading-loose text-muted">
            010 · 2468 · 1357
            <br />
            Behance · Instagram
          </p>
        </Reveal>
      </div>
    </section>
  );
}
