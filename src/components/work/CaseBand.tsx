import type { Work } from "@/data/works";
import Reveal from "@/components/Reveal";
import WorkVisual from "@/components/work/WorkVisual";

type CaseBandProps = {
  work: Work;
  flip?: boolean;
};

export default function CaseBand({ work, flip = false }: CaseBandProps) {
  return (
    <Reveal
      className={`grid items-center gap-[26px] py-[46px] max-[860px]:grid-cols-1 min-[861px]:grid-cols-[0.92fr_1.08fr] min-[861px]:gap-[50px] ${
        flip ? "min-[861px]:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="max-[860px]:order-2">
        <p className="mb-2.5 font-mono text-[11px] tracking-[0.12em] text-mark-deep">
          {work.label}
        </p>
        <h3 className="mb-[18px] text-[clamp(22px,2.6vw,30px)] font-extrabold tracking-[-0.02em]">
          {work.title}
        </h3>

        <div className="mb-5 flex flex-col gap-[13px]">
          <div className="grid grid-cols-[54px_1fr] items-start gap-3">
            <span className="pt-0.5 font-mono text-[11px] text-muted">문제</span>
            <p className="text-[14.5px] text-ink-soft">{work.problem}</p>
          </div>
          <div className="grid grid-cols-[54px_1fr] items-start gap-3">
            <span className="pt-0.5 font-mono text-[11px] text-muted">실행</span>
            <p className="text-[14.5px] text-ink-soft">{work.action}</p>
          </div>
          <div className="grid grid-cols-[54px_1fr] items-start gap-3">
            <span className="pt-0.5 font-mono text-[11px] text-muted">성과</span>
            <p className="text-[14.5px] font-medium text-ink">
              <span className="rounded-[3px] bg-mark-soft px-1.5 py-px">
                {work.resultHighlight}
              </span>{" "}
              — {work.result}
            </p>
          </div>
        </div>

        <p className="border-t border-line pt-3.5 font-mono text-[11px] leading-[1.9] text-muted">
          역할 {work.role} · {work.team} · {work.period}
        </p>
      </div>

      <div className="flex items-center justify-center max-[860px]:order-1">
        <WorkVisual work={work} />
      </div>
    </Reveal>
  );
}
