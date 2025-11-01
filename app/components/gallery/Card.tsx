import Image from "next/image";

type CardProps = {
  image: string;
};

const Card = ({ image }: CardProps) => {
  return (
    <div
      className="group grow-0 shrink-0 w-[218px] h-[420px] relative overflow-hidden rounded-xl border border-violet-700 hover:scale-110 duration-500 transition "
      style={{
        filter:
          "drop-shadow(0px 8.455057144165039px 42.27528381347656px rgba(139,92,246,0.2))",
      }}
    >
      <Image
        src={image}
        alt="movie john wick"
        className=" h-full w-full object-cover overflow-hidden"
        width={237}
        height={420}
      />
      {/* content bg */}
      <div
        className=" flex flex-col justify-start items-start w-[219px] h-[147px] absolute left-0 top-[273px] overflow-hidden gap-10 px-2.5 py-[9px] group-hover:backdrop-blur-xs transition duration-300"
        style={{
          background:
            "linear-gradient(to top, #000 6.25%, rgba(166,166,166,0) 100%)",
        }}
      >
        {/* content container */}
        <div className="flex flex-col justify-start items-center self-stretch grow-0 shrink-0 gap-5">
          {/* name and descriptions */}
          <div className="opacity-0 group-hover:opacity-100 duration-300 transition-opacity flex flex-col justify-start items-end self-stretch grow-0 shrink-0 relative ">
            <p className="self-stretch grow-0 shrink-0 w-[197.86px] text-md font-extralight text-right text-[#c8c8c8]">
              درام خانوادگی
            </p>
            <p className="pr-2 grow-0 shrink-0 w-52 text-xs font-medium text-right text-white">
              زندگی یک نویسنده جوان وقتی دگرگون می‌شود که به طور اتفاقی جان یک
              بازیگر تازه‌کار هالیوودی را نجات می‌دهد…
            </p>
          </div>
          {/* icons */}
          <div className="flex flex-row-reverse justify-end items-center self-stretch grow-0 shrink-0 gap-[5px]">
            {/* views */}
            <div className="flex justify-start items-center grow h-[19px] relative gap-1">
              <p className="grow-0 shrink-0 w-[27px] h-[19px] text-sm font-light text-left text-white">
                ۲.۳K
              </p>
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.3335 7.99996C1.9635 4.95729 4.70883 2.66663 8.00016 2.66663C11.2915 2.66663 14.0368 4.95729 14.6668 7.99996C14.0368 11.0426 11.2915 13.3333 8.00016 13.3333C4.70883 13.3333 1.9635 11.0426 1.3335 7.99996ZM8.00016 11.3333C8.88422 11.3333 9.73206 10.9821 10.3572 10.357C10.9823 9.73186 11.3335 8.88401 11.3335 7.99996C11.3335 7.1159 10.9823 6.26806 10.3572 5.64294C9.73206 5.01782 8.88422 4.66663 8.00016 4.66663C7.11611 4.66663 6.26826 5.01782 5.64314 5.64294C5.01802 6.26806 4.66683 7.1159 4.66683 7.99996C4.66683 8.88401 5.01802 9.73186 5.64314 10.357C6.26826 10.9821 7.11611 11.3333 8.00016 11.3333ZM8.00016 9.99996C8.5306 9.99996 9.0393 9.78925 9.41438 9.41417C9.78945 9.0391 10.0002 8.53039 10.0002 7.99996C10.0002 7.46953 9.78945 6.96082 9.41438 6.58575C9.0393 6.21067 8.5306 5.99996 8.00016 5.99996C7.46973 5.99996 6.96102 6.21067 6.58595 6.58575C6.21088 6.96082 6.00016 7.46953 6.00016 7.99996C6.00016 8.53039 6.21088 9.0391 6.58595 9.41417C6.96102 9.78925 7.46973 9.99996 8.00016 9.99996Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* star and bookmark */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 transition-opacity flex justify-start items-center grow relative gap-[9.51193904876709px]">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grow-0 shrink-0 w-[19.02px] h-[19.02px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M4.22754 16.9101V2.11377H14.7964V16.9101L9.51195 14.4444L4.22754 16.9101ZM5.10827 15.4305L9.51195 13.3781L13.9156 15.4305V3.06837H5.10827V15.4305Z"
                  fill="white"
                />
              </svg>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grow-0 shrink-0 w-[19.02px] h-[19.02px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M17.3744 8.02727C17.3896 7.92415 17.3844 7.81903 17.359 7.71793C17.3336 7.61684 17.2885 7.52174 17.2263 7.4381C17.164 7.35446 17.0859 7.28391 16.9964 7.23049C16.9069 7.17708 16.8077 7.14184 16.7046 7.12681L12.2252 6.47207L10.223 2.39224C10.1507 2.26753 10.0469 2.16402 9.92199 2.09209C9.79709 2.02016 9.65546 1.98234 9.51133 1.98242C9.36719 1.9825 9.22561 2.02048 9.10078 2.09255C8.97596 2.16462 8.87228 2.26825 8.80014 2.39303L6.79867 6.47207L2.31934 7.12681C2.17313 7.14805 2.03577 7.20973 1.92275 7.30489C1.80973 7.40005 1.72555 7.5249 1.67973 7.66536C1.6339 7.80581 1.62823 7.95628 1.66338 8.09979C1.69852 8.24329 1.77307 8.37412 1.87862 8.4775L5.12298 11.6585L4.35727 16.1481C4.33307 16.2938 4.34998 16.4434 4.40611 16.58C4.46223 16.7167 4.55535 16.8349 4.675 16.9216C4.79465 17.0082 4.93608 17.0597 5.08341 17.0704C5.23074 17.0811 5.37813 17.0505 5.50901 16.982L9.51195 14.8656L13.5141 16.9812C13.6448 17.0504 13.7923 17.0816 13.9398 17.0714C14.0874 17.0612 14.2291 17.0099 14.3491 16.9233C14.469 16.8367 14.5623 16.7183 14.6184 16.5814C14.6745 16.4446 14.6912 16.2947 14.6666 16.1489L13.9009 11.6585L17.1461 8.47671C17.269 8.35573 17.3492 8.19794 17.3744 8.02727ZM13.1978 11.2376C13.1521 11.2823 13.1179 11.3375 13.0982 11.3984C13.0785 11.4593 13.0737 11.524 13.0845 11.5871L13.8851 16.2805L9.69664 14.0666C9.6397 14.0366 9.57631 14.0209 9.51195 14.0209C9.44759 14.0209 9.3842 14.0366 9.32726 14.0666L5.13884 16.2813L5.93943 11.5871C5.95016 11.524 5.94545 11.4593 5.92571 11.3984C5.90597 11.3375 5.87179 11.2823 5.82608 11.2376L2.43348 7.91075L7.1197 7.22589C7.18348 7.2166 7.24403 7.19189 7.2961 7.1539C7.34818 7.11592 7.3902 7.0658 7.41853 7.00791L9.51195 2.7426L11.6046 7.0087C11.633 7.0667 11.6751 7.11687 11.7273 7.15486C11.7796 7.19285 11.8403 7.21751 11.9042 7.22668L16.5912 7.91075L13.1978 11.2376Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-300 transition-opacity flex justify-start items-start grow-0 shrink-0 gap-[26.44862174987793px]">
              <div className="flex justify-center items-center grow-0 shrink-0 w-[94.77px] h-[26.45px] relative gap-[4.408103942871094px] px-[13.224310874938965px] py-[8.816207885742188px] rounded-[4.41px] bg-violet-500">
                <p className="grow-0 shrink-0 text-[13.224310874938965px] text-left text-white">
                  تماشا کنید
                </p>
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.87192 4.08203L16.2132 9.21472C16.3335 9.28866 16.4329 9.39222 16.5018 9.5155C16.5708 9.63878 16.607 9.77767 16.607 9.91891C16.607 10.0602 16.5708 10.199 16.5018 10.3223C16.4329 10.4456 16.3335 10.5492 16.2132 10.6231L7.87192 15.7558C7.74666 15.8329 7.60312 15.8751 7.45609 15.8782C7.30906 15.8812 7.16387 15.845 7.0355 15.7733C6.90714 15.7015 6.80025 15.5968 6.72585 15.4699C6.65146 15.3431 6.61226 15.1987 6.6123 15.0516V4.78622C6.61226 4.63916 6.65146 4.49475 6.72585 4.36789C6.80025 4.24103 6.90714 4.13632 7.0355 4.06456C7.16387 3.9928 7.30906 3.95658 7.45609 3.95965C7.60312 3.96272 7.74666 4.00497 7.87192 4.08203Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
