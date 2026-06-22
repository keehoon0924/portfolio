import FakeDetailPage from "@/components/work/FakeDetailPage";
import MockScrollScreen from "@/components/work/MockScrollScreen";

const screenClassName =
  "absolute overflow-y-auto overflow-x-hidden bg-white [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15";

type PhoneMockProps = {
  title: string;
  size?: "default" | "compact";
};

export default function PhoneMock({ title, size = "default" }: PhoneMockProps) {
  const compact = size === "compact";

  return (
    <div
      data-mock
      className={
        compact
          ? "relative z-[3] mb-2 mr-[-40px] h-[308px] w-[150px] flex-none rounded-[24px] bg-[#1c1c1e] p-[7px] shadow-[0_30px_60px_-32px_rgba(22,24,27,0.45)]"
          : "relative h-[510px] w-[248px] flex-none rounded-[36px] bg-[#1c1c1e] p-[11px] shadow-[0_30px_60px_-32px_rgba(22,24,27,0.45)]"
      }
    >
      <div
        className={
          compact
            ? "absolute left-1/2 top-[7px] z-[3] h-3 w-[52px] -translate-x-1/2 rounded-b-xl bg-[#1c1c1e]"
            : "absolute left-1/2 top-[11px] z-[3] h-[18px] w-[82px] -translate-x-1/2 rounded-b-xl bg-[#1c1c1e]"
        }
      />
      <MockScrollScreen
        className={
          compact
            ? `${screenClassName} inset-[7px] rounded-[18px]`
            : `${screenClassName} inset-[11px] rounded-[27px]`
        }
      >
        <FakeDetailPage title={title} />
      </MockScrollScreen>
    </div>
  );
}
