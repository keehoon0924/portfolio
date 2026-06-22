export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-8">
      <h1 className="max-w-4xl text-center text-[clamp(40px,6vw,84px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-ink">
        아이디어를{" "}
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10">성과</span>
          <span
            className="absolute -left-[0.04em] -right-[0.04em] bottom-[0.07em] -z-10 h-[0.34em] rounded-[2px] bg-mark"
            aria-hidden
          />
        </span>
        로 증명하는 마케터
      </h1>
    </main>
  );
}
