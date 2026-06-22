import Highlighter from "@/components/Highlighter";
import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";

const tools = ["Figma", "Photoshop", "GA4", "Meta Ads", "CapCut", "Notion"];

const skills = [
  { label: "기획 · 전략", value: 90 },
  { label: "콘텐츠 · 카피", value: 85 },
  { label: "UI/UX · 상세페이지", value: 80 },
  { label: "영상 · 모션", value: 70 },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-[90px]">
      <div className="mx-auto w-full max-w-[1160px] px-[30px] max-md:px-5">
        <Reveal className="mb-[18px] flex items-baseline gap-4">
          <span className="font-mono text-[13px] font-medium text-mark-deep">
            01
          </span>
          <h2 className="text-[clamp(24px,3.3vw,38px)] font-extrabold tracking-[-0.015em]">
            About
          </h2>
        </Reveal>

        <div className="mt-[30px] grid gap-[54px] max-[760px]:grid-cols-1 max-[760px]:gap-[30px] min-[761px]:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <p className="text-[clamp(18px,2vw,24px)] font-medium leading-[1.55]">
                예쁘게 만드는 데서 멈추지 않습니다.{" "}
                <Highlighter observe>왜 이렇게 풀었는지</Highlighter>, 무엇을
                측정할지부터 설계하는 마케터입니다.
              </p>
            </Reveal>
            <Reveal className="mt-[22px] flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {tool}
                </span>
              ))}
            </Reveal>
          </div>

          <div>
            {skills.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                value={skill.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
