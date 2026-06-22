import FakeDetailPage from "@/components/work/FakeDetailPage";
import MockScrollScreen from "@/components/work/MockScrollScreen";

const screenClassName =
  "absolute overflow-y-auto overflow-x-hidden bg-white [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15";

type TabletMockProps = {
  title: string;
};

export default function TabletMock({ title }: TabletMockProps) {
  return (
    <div
      data-mock
      className="relative z-[2] mb-1 ml-[-26px] h-[250px] w-[188px] flex-none rounded-[20px] bg-[#1c1c1e] p-[11px] shadow-[0_30px_60px_-32px_rgba(22,24,27,0.45)]"
    >
      <MockScrollScreen className={`${screenClassName} inset-[11px] rounded-[11px]`}>
        <FakeDetailPage title={title} />
      </MockScrollScreen>
    </div>
  );
}
