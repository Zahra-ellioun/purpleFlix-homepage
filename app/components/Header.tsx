import Image from "next/image";

import { CiSearch, CiBookmark, CiTimer } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-linear-to-b from-[#140028]/30 via-[#0F0F19]/30 to-[#0B0B13]/30   text-white py-3 px-8 fixed top-0 z-50 w-full">
      {/* container */}
      <div className="flex justify-between items-center self-stretch grow-0 shrink-0  overflow-hidden gap-4">
        {/* logo and name */}
        <div className="flex items-center justify-start grow-0 shrink-0  gap-3">
          {/* logo */}
          <Image
            src="/logo.png"
            className="object-none h-[41px] w-[46.61px] shadow-inner"
            alt="Logo"
            width={100}
            height={100}
          />
          {/* پورپلفلیکس */}
          <p className="grow-0 shrink-0 text-3xl font-semibold text-right">
            <span className="grow-0 shrink-0  text-white">پورپل</span>
            <span className="grow-0 shrink-0  text-[#8B5CF6]">فلیکس</span>
          </p>
        </div>

        {/* navbar */}
        <nav className="font-semibold hidden lg:block  ">
          <ul className="flex space-x-6 lg:space-x-10">
            <li>
              <a href="#home" className="hover:text-violet-500 transition">
                خانه
              </a>
            </li>
            <li>
              <a
                href="#Categories"
                className="hover:text-violet-500 transition"
              >
                دسته بندی ها
              </a>
            </li>
            <li>
              <a href="#BuyCoins" className="hover:text-violet-500 transition">
                خرید کوین
              </a>
            </li>
            <li>
              <a href="#Club" className="hover:text-violet-500 transition">
                فن کلاب
              </a>
            </li>
            <li>
              <a href="#Chalanges" className="hover:text-violet-500 transition">
                چالش
              </a>
            </li>
          </ul>
        </nav>

        {/* action btns and icons*/}
        <div className=" items-center justify-end grow-0 shrink-0  gap-5 hidden sm:flex ">
          {/* icons */}
          <div className="flex gap-2 text-lg ">
            <span>
              <CiSearch />
            </span>
            <span>
              <CiBookmark />
            </span>
            <span>
              <CiTimer />
            </span>
          </div>
          {/* buttons  */}
          <div className="flex justify-end items-center grow-0 shrink-0 gap-2 text-base lg:text-xl">
            <button className="grow-0 shrink-0 px-3 py-2 rounded-lg bg-neutral-600/50 border border-neutral-700/5 hover:bg-neutral-800/50 transition duration-300  text-center text-violet-100">
              ورود
            </button>
            <button className="grow-0 shrink-0 px-3 py-2 rounded-lg bg-[#8B5CF6] border border-neutral-700/5 hover:bg-[#763dfa] transition duration-300  text-center text-violet-100">
              دانلود اپ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
