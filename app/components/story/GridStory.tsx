const GridStory = () => {
  return (
    // container
    <div className="flex flex-col justify-end items-center self-stretch grow-0 shrink-0  gap-6 p-2.5 mx-auto">
      {/* text */}
      <div className="flex justify-center items-center self-stretch grow-0 shrink-0 relative gap-2.5 px-16">
        <p className="grow w-[1292px] h-8 text-[32px] font-semibold text-right text-white">
          قصه‌ات را انتخاب کن
        </p>
      </div>
      {/* grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-1 grow-0 shrink-0 relative gap-6 px-[61px]  ">
        {/* first story */}
        <div
          className="grow-0 shrink-0 w-[423px] h-[304px] relative overflow-hidden rounded-2xl border border-neutral-400"
          style={{
            background:
              "linear-gradient(-89.82deg, #f59e0b 0.16%, #ef4444 99.84%)",
          }}
        >
          <div className="flex justify-between items-center w-[423px] absolute left-0 top-[250px] overflow-hidden px-[22px] py-[19px] bg-[#2a2a2d]/31">
            <div className="flex justify-start items-center grow-0 shrink-0 relative gap-1.5">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grow-0 shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9 7L14 2M14 2H10.6667M14 2V5.33333M14 9.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6.66667"
                  stroke="#F5C0EF"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="grow-0 shrink-0 text-sm text-left text-[#f5c0ef]">
                شروع این داستان
              </p>
            </div>
            <p className="grow-0 shrink-0 text-base font-medium text-left text-white">
              اکشن و ماجراجویی
            </p>
          </div>
          <p className="absolute left-[164px] top-[104px] opacity-[0.42] text-[95px] font-semibold text-right text-white">
            🎬
          </p>
        </div>
        {/* secont story */}
        <div className="grow-0 shrink-0 w-[423px] h-[304px] relative overflow-hidden rounded-2xl bg-linear-to-tl from-indigo-500 to-violet-600 border border-neutral-400">
          <div className="flex justify-between items-center w-[423px] absolute left-0 top-[250px] overflow-hidden px-[22px] py-[19px] bg-[#2a2a2d]/31">
            <div className="flex justify-start items-center grow-0 shrink-0 relative gap-1.5">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grow-0 shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9 7L14 2M14 2H10.6667M14 2V5.33333M14 9.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6.66667"
                  stroke="#F5C0EF"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="grow-0 shrink-0 text-sm text-left text-[#f5c0ef]">
                شروع این داستان
              </p>
            </div>
            <p className="grow-0 shrink-0 text-base font-medium text-left text-white">
              راز و معما
            </p>
          </div>
          <p className="absolute left-[164px] top-[104px] opacity-[0.42] text-[95px] font-semibold text-right text-white">
            🎬
          </p>
        </div>
        {/* third story */}
        <div
          className="grow-0 shrink-0 w-[423px] h-[304px] relative overflow-hidden rounded-2xl border border-neutral-400"
          style={{
            background:
              "linear-gradient(-44.83deg, #ec4899 0.15%, #f43f5e 99.85%)",
          }}
        >
          <div className="flex justify-between items-center w-[423px] absolute left-0 top-[250px] overflow-hidden px-[22px] py-[19px] bg-[#2a2a2d]/31">
            <div className="flex justify-start items-center grow-0 shrink-0 relative gap-1.5">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grow-0 shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9 7L14 2M14 2H10.6667M14 2V5.33333M14 9.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6.66667"
                  stroke="#F5C0EF"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="grow-0 shrink-0 text-sm text-left text-[#f5c0ef]">
                شروع این داستان
              </p>
            </div>
            <p className="grow-0 shrink-0 text-base font-medium text-left text-white">
              عاشقانه
            </p>
          </div>
          <p className="absolute left-[164px] top-[104px] opacity-[0.42] text-[95px] font-semibold text-right text-white">
            🎬
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridStory;
