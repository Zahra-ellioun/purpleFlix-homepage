const Footer = () => {
  return (
    <div className="self-stretch grow-0 shrink-0 h-[331px] relative ">
      <div className="flex flex-col justify-start items-start w-full h-[266px] absolute left-0 top-[65px] gap-2.5">
        <div className="flex justify-between items-center self-stretch grow-0 shrink-0 h-[266px] overflow-hidden gap-[81px] px-[60px] pt-[61px] pb-[22px] bg-[#1c1c1c]">
          {/* first */}
          <div className="flex flex-col justify-center items-start grow-0 shrink-0 gap-4">
            <div className="flex flex-col justify-center items-start grow-0 shrink-0 relative gap-[21px]">
              <div className="flex justify-end items-start grow-0 shrink-0 gap-[9px]">
                <div className="flex justify-start items-center grow-0 shrink-0 relative gap-[6.833333492279053px]">
                  <img
                    src="/images/logo.png"
                    className="grow-0 shrink-0 w-[46.61px] h-[41px] object-none"
                  />
                </div>
              </div>
              <p className="grow-0 shrink-0 text-xs text-right text-white">
                <span className="grow-0 shrink-0 text-xs font-bold text-right text-white">
                  شرکت ما با ارائه محصولات با کیفیت و نوآورانه، به دنبال ایجاد
                  تجربه‌ای بی‌نظیر برای مشتریان است.
                </span>
                <br />
                <span className="grow-0 shrink-0 text-xs font-light text-right text-white">
                  {" "}
                  ۵۷ هئول ایساف، استیشن رود، کاردیف، انگلستان
                </span>
                <br />
                <span className="grow-0 shrink-0 text-xs font-light text-right text-white">
                  ایمیل: info@example.com
                </span>
              </p>
              <div className="flex justify-start items-center grow-0 shrink-0 relative gap-3">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="grow-0 shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                    fill="#8B5CF6"
                  />
                </svg>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="grow-0 shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19088 14.4129 4.53008 14.4369 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37371 18.4905 4.49405 19.1394 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                    fill="#8B5CF6"
                  />
                </svg>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="grow-0 shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM9.17998 16.7748H6.84718V9.26758H9.17998V16.7748ZM7.99918 8.34598C7.26238 8.34598 6.78598 7.82398 6.78598 7.17838C6.78598 6.51958 7.27678 6.01318 8.02918 6.01318C8.78158 6.01318 9.24238 6.51958 9.25678 7.17838C9.25678 7.82398 8.78158 8.34598 7.99918 8.34598ZM17.7 16.7748H15.3672V12.6144C15.3672 11.646 15.0288 10.9884 14.1852 10.9884C13.5408 10.9884 13.158 11.4336 12.9888 11.862C12.9264 12.0144 12.9108 12.2304 12.9108 12.4452V16.7736H10.5768V11.6616C10.5768 10.7244 10.5468 9.94078 10.5156 9.26638H12.5424L12.6492 10.3092H12.696C13.0032 9.81958 13.7556 9.09718 15.0144 9.09718C16.5492 9.09718 17.7 10.1256 17.7 12.336V16.7748Z"
                    fill="#8B5CF6"
                  />
                </svg>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="grow-0 shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col justify-center items-end grow-0 shrink-0 h-[162px] w-[166px] relative gap-3">
            <p className="self-stretch grow-0 shrink-0 w-[166px] text-base font-bold text-right text-white">
              قوانین
            </p>
          </div>
          {/* third */}
          <div className="flex flex-col justify-center items-end grow-0 shrink-0 h-[162px] w-[157px] relative gap-3">
            <p className="self-stretch grow-0 shrink-0 w-[157px] text-base font-bold text-right text-white">
              پشتیبانی
            </p>
          </div>
          {/* forth */}
          <div className="flex flex-col justify-start items-end grow-0 shrink-0 relative gap-3">
            <p className="self-stretch grow-0 shrink-0 w-[282px] text-base font-bold text-right text-white">
              عضویت در خبرنامه
            </p>
            <div className="flex flex-col justify-start items-end self-stretch grow-0 shrink-0 relative gap-5">
              <p className="self-stretch grow-0 shrink-0 w-[282px] text-xs text-right text-white">
                {" "}
                از آخرین رویدادها، وبینارها و تازه‌های هیجان‌انگیز باخبر شوید.
              </p>
              <div className="flex justify-end items-center grow-0 shrink-0 w-[282px] h-11 relative overflow-hidden gap-3 pl-2 pr-[22px] py-2 rounded-[999999px] bg-[#303030]">
                <div className="flex justify-center items-center grow-0 shrink-0 w-[43px] h-9 relative overflow-hidden gap-2.5 p-2 rounded-full bg-violet-500">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="grow-0 shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M10 16L6 12M6 12L10 8M6 12H18"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit={10}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="grow w-[197px] text-sm font-light text-right text-[#ccc]">
                  ایمیل شما
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[109px] absolute left-[25px] top-0 gap-6 px-[61px]">
        <div className=" flex justify-between items-center grow h-[111px] relative overflow-hidden gap-2.5 px-8 py-5 rounded-2xl bg-[#2f2f30] w-full">
          <div className=" flex justify-between items-center grow-0 shrink-0 gap-6 w-full">
            {/* right part */}
            <p className="flex items-center grow w-[771.16px] h-[61px] text-2xl font-semibold text-right text-white">
              همین الان شروع کن!
            </p>
            {/* left part */}
            <div className="flex justify-start items-start grow-0 shrink-0 gap-6">
              <div className="flex justify-center items-center grow-0 shrink-0 h-[52px] relative gap-2 px-3 py-2 rounded-lg bg-violet-700">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="grow-0 shrink-0 w-[19.84px] h-[19.84px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.87192 4.08203L16.2132 9.21472C16.3335 9.28866 16.4329 9.39222 16.5018 9.5155C16.5708 9.63878 16.607 9.77767 16.607 9.91891C16.607 10.0602 16.5708 10.199 16.5018 10.3223C16.4329 10.4456 16.3335 10.5492 16.2132 10.6231L7.87192 15.7558C7.74666 15.8329 7.60312 15.8751 7.45609 15.8782C7.30906 15.8812 7.16387 15.845 7.0355 15.7733C6.90714 15.7015 6.80025 15.5968 6.72585 15.4699C6.65146 15.3431 6.61226 15.1987 6.6123 15.0516V4.78622C6.61226 4.63916 6.65146 4.49475 6.72585 4.36789C6.80025 4.24103 6.90714 4.13632 7.0355 4.06456C7.16387 3.9928 7.30906 3.95658 7.45609 3.95965C7.60312 3.96272 7.74666 4.00497 7.87192 4.08203Z"
                    fill="white"
                  />
                </svg>
                <p className="grow-0 shrink-0 text-2xl text-left text-white">
                  تماشای اولین اپیزود رایگان
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center grow-0 shrink-0 h-[52px] relative gap-2 px-3 py-2 rounded-lg bg-neutral-300/10 border border-neutral-700/5">
              <p className="grow-0 shrink-0 text-2xl font-medium text-center text-violet-100">
                نصب اپلیکیشن
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
