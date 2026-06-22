import { works, type WorkType } from "@/data/works";
import Reveal from "@/components/Reveal";
import CaseBand from "@/components/work/CaseBand";
import CategoryDivider from "@/components/work/CategoryDivider";

const WORK_TYPE_ORDER: WorkType[] = [
  "team",
  "detail",
  "landing",
  "video",
  "card",
];

export default function WorkSection() {
  let bandIndex = 0;
  let isFirstCategory = true;

  return (
    <section id="work" className="border-t border-line py-[90px]">
      <div className="mx-auto w-full max-w-[1160px] px-[30px] max-md:px-5">
        <Reveal className="mb-[18px] flex items-baseline gap-4">
          <span className="font-mono text-[13px] font-medium text-mark-deep">
            03
          </span>
          <h2 className="text-[clamp(24px,3.3vw,38px)] font-extrabold tracking-[-0.015em]">
            Selected Work
          </h2>
        </Reveal>

        <div>
          {WORK_TYPE_ORDER.map((type) => {
            const group = works.filter((work) => work.type === type);
            if (group.length === 0) return null;

            const first = group[0];
            const showDivider = isFirstCategory;
            isFirstCategory = false;

            return (
              <div key={type}>
                <CategoryDivider
                  label={first.label}
                  category={first.category}
                  isFirst={showDivider}
                />
                {group.map((work) => {
                  const flip = bandIndex % 2 === 1;
                  bandIndex += 1;
                  return (
                    <CaseBand key={work.id} work={work} flip={flip} />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
