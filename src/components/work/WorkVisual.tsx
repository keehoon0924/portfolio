import type { Work } from "@/data/works";
import LaptopMock from "@/components/work/LaptopMock";
import PhoneMock from "@/components/work/PhoneMock";
import TabletMock from "@/components/work/TabletMock";

type WorkVisualProps = {
  work: Work;
};

function CardNewsVisual() {
  return (
    <div className="grid w-full max-w-[460px] grid-cols-4 gap-2.5">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="flex aspect-[4/5] items-center justify-center rounded-sm border border-line bg-surface-2 font-mono text-[9px] text-muted"
        >
          ＋ {index + 1}
        </div>
      ))}
    </div>
  );
}

function VideoVisual() {
  return (
    <div className="relative flex aspect-video w-full max-w-[480px] items-center justify-center overflow-hidden rounded-[14px] bg-ink">
      <div className="absolute inset-0 flex items-end justify-center gap-1.5 p-[30px] opacity-45">
        {[32, 48, 64, 48, 32].map((height, index) => (
          <span
            key={index}
            className="w-2 rounded-[3px] bg-mark"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <p className="relative z-[2] font-mono text-xs text-white">
        ▶ 영상 자리 (자동 미리보기)
      </p>
    </div>
  );
}

export default function WorkVisual({ work }: WorkVisualProps) {
  switch (work.type) {
    case "team":
      return (
        <div className="flex items-end justify-center">
          <PhoneMock title={work.title} size="compact" />
          <LaptopMock title={work.title} size="compact" />
          <TabletMock title={work.title} />
        </div>
      );
    case "detail":
      return <PhoneMock title={work.title} />;
    case "landing":
      return <LaptopMock title={work.title} />;
    case "video":
      return <VideoVisual />;
    case "card":
      return <CardNewsVisual />;
    default:
      return null;
  }
}
