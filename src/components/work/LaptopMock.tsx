import FakeDetailPage from "@/components/work/FakeDetailPage";

const screenClassName =
  "absolute inset-x-3 top-3 bottom-0 overflow-y-auto overflow-x-hidden rounded-t-md bg-white [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15";

type LaptopMockProps = {
  title: string;
  size?: "default" | "compact";
};

export default function LaptopMock({ title, size = "default" }: LaptopMockProps) {
  const compact = size === "compact";

  return (
    <div
      className={
        compact
          ? "relative z-[1] w-full max-w-[420px] max-[860px]:max-w-[280px]"
          : "relative w-full max-w-[560px]"
      }
    >
      <div className="relative aspect-[16/10] w-full rounded-t-[14px] bg-[#1c1c1e] px-3 pt-3 shadow-[0_30px_60px_-32px_rgba(22,24,27,0.45)]">
        <div className={screenClassName}>
          <FakeDetailPage title={title} />
        </div>
      </div>
      <div className="absolute -bottom-[13px] left-[-7%] right-[-7%] h-[13px] rounded-b-xl bg-gradient-to-b from-[#cfccc5] to-[#a8a49c]" />
    </div>
  );
}
