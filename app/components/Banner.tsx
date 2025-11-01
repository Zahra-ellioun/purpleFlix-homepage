import Image from "next/image";

import { VscTriangleRight } from "react-icons/vsc";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="banner"
        width={1080}
        height={1920}
        className="h-auto w-full object-contain -scale-x-[-1] "
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:px-38  pt-12 sm:pt-10 lg:pt-18">
        <p className="font-extrabold text-base sm:text-3xl md:text-4xl lg:text-5xl sm:mb-3">
          هرقسمت
        </p>
        <p className="font-extrabold  text-base sm:text-3xl md:text-4xl lg:text-5xl text-[#C5A4FF] sm:mb-6">
          کمتر از یک دقیقه
        </p>
        <p className="hidden sm:block text-xl md:text-2xl lg:text-3xl font-light mb-2">
          وارد دنیای درام های عمودی شوید؛ تماشای رایگان،
        </p>
        <p className="hidden sm:block text-xl md:text-2xl lg:text-3xl font-light mb-7">
          ادامه با تبلیغ یا کوین
        </p>
        <div className="flex gap-3 text-white">
          <button className="text-xs sm:text-xl lg:text-2xl bg-[#8B5CF6] rounded-lg sm:rounded-xl px-3 py-2 lg:px-4 lg:py-3 flex justify-center items-center gap-2 shadow-2xl hover:bg-[#763dfa] duration-300 transition">
            <span>
              <VscTriangleRight />
            </span>
            <span>تماشای اولین اپیزود رایگان</span>
          </button>
          <button className="text-xs sm:text-xl lg:text-2xl rounded-lg sm:rounded-xl px-3 py-2 lg:px-4 lg:py-3 bg-[#404040]/50 backdrop-blur-md shadow-2xl hover:bg-[#404040]/90 duration-300 transition">
            نصب اپلیکیشن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
