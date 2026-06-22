const stats = [
  {
    value: "+18",
    unit: "%",
    label: "상세페이지 전환율 (가설 목표)",
  },
  {
    value: "2",
    unit: "배",
    label: "콘텐츠 저장 수 증가",
  },
  {
    value: "9",
    unit: "건",
    label: "완성 프로젝트",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="border-t border-line py-[90px]">
      <div className="mx-auto w-full max-w-[1160px] px-[30px] max-md:px-5">
        <div className="mb-[18px] flex items-baseline gap-4">
          <span className="font-mono text-[13px] font-medium text-mark-deep">
            02
          </span>
          <h2 className="text-[clamp(24px,3.3vw,38px)] font-extrabold tracking-[-0.015em]">
            한눈에 보는 성과
          </h2>
        </div>

        <div className="mt-[30px] grid gap-[18px] max-[680px]:grid-cols-1 min-[681px]:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-line bg-surface px-6 py-[26px]"
            >
              <p className="text-[clamp(32px,4vw,46px)] font-extrabold leading-none tracking-[-0.02em]">
                {stat.value}
                <span className="ml-[3px] text-[0.5em] text-mark-deep">
                  {stat.unit}
                </span>
              </p>
              <p className="mt-3 font-mono text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 font-mono text-[11px] text-muted">
          * 수치는 예시입니다 — 실제 데이터 또는 측정 지표(가설)로 교체합니다.
        </p>
      </div>
    </section>
  );
}
