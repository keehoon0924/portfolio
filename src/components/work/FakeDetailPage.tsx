type FakeDetailPageProps = {
  title: string;
};

export default function FakeDetailPage({ title }: FakeDetailPageProps) {
  return (
    <div className="text-xs text-[#1c1c1e]">
      <div className="bg-ink px-3.5 py-[18px] text-white">
        <strong className="block text-base font-extrabold leading-[1.3]">
          {title}
        </strong>
        <span className="text-[11px] text-[#b9bcc1] no-underline">
          상세 디자인
        </span>
      </div>

      <div className="mx-3.5 my-3 aspect-[16/10] rounded-sm bg-[repeating-linear-gradient(135deg,#eef0f2_0_11px,#e4e7ea_11px_22px)]" />

      <div className="border-t-[7px] border-surface-2 px-3.5 py-4">
        <h6 className="mb-2.5 text-[13px] font-normal">핵심 베네핏</h6>
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-7 w-7 flex-none rounded-sm bg-mark" />
          <span className="text-[11px] text-[#6f7279]">
            흡수율을 높인 차세대 설계
          </span>
        </div>
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-7 w-7 flex-none rounded-sm bg-mark" />
          <span className="text-[11px] text-[#6f7279]">100% 식물성 · 무첨가</span>
        </div>
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-7 w-7 flex-none rounded-sm bg-mark" />
          <span className="text-[11px] text-[#6f7279]">식약처 인증</span>
        </div>
      </div>

      <div className="mx-3.5 my-3 aspect-[16/10] rounded-sm bg-[repeating-linear-gradient(135deg,#eef0f2_0_11px,#e4e7ea_11px_22px)]" />

      <div className="border-t-[7px] border-surface-2 px-3.5 py-4">
        <h6 className="mb-2.5 text-[13px] font-normal">섭취 전후</h6>
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-7 w-7 flex-none rounded-sm bg-mark" />
          <span className="text-[11px] text-[#6f7279]">4주 변화 비교</span>
        </div>
      </div>

      <div className="mx-3.5 my-3 aspect-[16/10] rounded-sm bg-[repeating-linear-gradient(135deg,#eef0f2_0_11px,#e4e7ea_11px_22px)]" />

      <div className="border-t-[7px] border-surface-2 px-3.5 py-4">
        <h6 className="mb-2.5 text-[13px] font-normal">후기</h6>
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-7 w-7 flex-none rounded-sm bg-mark" />
          <span className="text-[11px] text-[#6f7279]">★★★★★ 재구매했어요</span>
        </div>
      </div>

      <div className="sticky bottom-0 border-t border-[#eee] bg-white px-3.5 py-2.5">
        <span className="block rounded-sm bg-ink px-2.5 py-2.5 text-center text-xs font-bold text-white">
          지금 구매하기 · 29,900원
        </span>
      </div>
    </div>
  );
}
