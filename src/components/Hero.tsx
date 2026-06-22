const keywords = ["콘텐츠", "퍼포먼스", "기획·실행"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-svh items-center pb-[60px] pt-[120px]"
    >
      <div className="mx-auto w-full max-w-[1160px] px-[30px] max-md:px-5">
        <div className="grid w-full items-center gap-11 max-[860px]:grid-cols-1 max-[860px]:gap-11 min-[861px]:grid-cols-[1.12fr_0.88fr] min-[861px]:gap-[50px]">
          <div>
            <p className="mb-[22px] font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Marketer · Portfolio 2025
            </p>
            <h1 className="text-[clamp(34px,5.2vw,72px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink">
              아이디어를
              <br />
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">성과</span>
                <span
                  className="absolute -left-[0.04em] -right-[0.04em] bottom-[0.07em] -z-10 h-[0.34em] rounded-[2px] bg-mark"
                  aria-hidden
                />
              </span>
              로 증명하는
              <br />
              마케터 이기훈입니다.
            </h1>
            <p className="mt-6 max-w-[30em] text-[clamp(15px,1.4vw,18px)] text-ink-soft">
              전략적 사고와 빠른 실행으로 브랜드의 가치를 키웁니다. 기획부터
              제작까지 직접 만들고, 직접 검증합니다.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-line bg-surface px-3.5 py-[7px] font-mono text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center max-[860px]:order-first">
            <div className="w-[280px] max-w-[78vw] rounded-[18px] border border-line bg-surface px-6 pb-[30px] pt-[26px] text-center shadow-[0_30px_60px_-30px_rgba(22,24,27,0.28)]">
              <div
                className="relative mx-auto -mt-[58px] mb-3.5 h-[54px] w-[46px] rounded-t-[24px] border-[3px] border-b-0 border-ink"
                aria-hidden
              >
                <div className="absolute bottom-[-9px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-ink bg-paper" />
              </div>
              <p className="font-mono text-xs tracking-[0.2em] text-muted">
                MARKETER
              </p>
              <p className="my-[3px] mb-[18px] text-[30px] font-extrabold">
                이기훈
              </p>
              <div className="relative mx-auto mb-[18px] flex h-[174px] w-[150px] items-center justify-center overflow-hidden rounded-sm bg-mark">
                <span className="font-mono text-[9px] text-black/40">
                  ＋ 본인 사진
                </span>
              </div>
              <p className="font-mono text-xs leading-[1.95] text-ink-soft">
                1994.07.21
                <br />
                010.2468.1357
                <br />
                kihoon.lee@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
