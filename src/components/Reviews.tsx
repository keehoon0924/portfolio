import Reveal from "@/components/Reveal";

const reviews = [
  {
    quote:
      "“막히는 지점을 그냥 넘어가지 않고, 왜 이렇게 풀어야 하는지부터 같이 고민해준 사람.”",
    author: "— 팀 프로젝트 동료 김○○",
    rotate: "",
  },
  {
    quote:
      "“아이디어를 말로만 끝내지 않고 진짜 결과물로 만들어내는 추진력이 인상적이었어요.”",
    author: "— 스터디 메이트 박○○",
    rotate: "-rotate-[1.4deg]",
  },
  {
    quote:
      "“디자인도, 기획도 욕심내는데 신기하게 일정은 항상 지켰던 사람.”",
    author: "— 조장 이○○",
    rotate: "rotate-[1.1deg]",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-line py-[90px]">
      <div className="mx-auto w-full max-w-[1160px] px-[30px] max-md:px-5">
        <Reveal className="mb-[18px] flex items-baseline gap-4">
          <span className="font-mono text-[13px] font-medium text-mark-deep">
            04
          </span>
          <h2 className="text-[clamp(24px,3.3vw,38px)] font-extrabold tracking-[-0.015em]">
            함께한 사람들의 한마디
          </h2>
        </Reveal>

        <div className="mt-[30px] grid gap-[26px] max-[760px]:grid-cols-1 min-[761px]:grid-cols-3">
          {reviews.map((review) => (
            <Reveal
              key={review.author}
              as="article"
              className={`postit-note relative rounded-[3px] bg-note px-6 pb-7 pt-[26px] shadow-[0_14px_26px_-16px_rgba(22,24,27,0.28)] ${review.rotate}`}
            >
              <div
                className="absolute -top-2.5 left-1/2 h-[18px] w-16 -translate-x-1/2 -rotate-[3deg] border border-black/[0.04] bg-white/45"
                aria-hidden
              />
              <p className="font-hand text-[23px] leading-[1.4] text-note-ink">
                {review.quote}
              </p>
              <p className="mt-4 font-mono text-[11px] text-[#8a7a3c]">
                {review.author}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
