import Comment from "./Comment";

const GridComments = () => {
  const commentsData = [
    {
      id: 3,
      text: "تو مسیر دانشگاه همیشه یک اپیزود می‌بینم – کوتاه و هیجان‌انگیز!",
    },
    {
      id: 2,
      text: " قسمت‌ها کوتاهن ولی قلاب می‌اندازن. نمی‌تونم ادامه ندم.",
    },
    {
      id: 1,
      text: "مثل رمان تصویریه، اما روی موبایل و خیلی سریع.",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start self-stretch grow-0 shrink-0 h-[212px] gap-6 p-2.5">
      <div className="flex justify-center items-center self-stretch grow-0 shrink-0 relative gap-2.5 px-16">
        <p className="grow w-[1292px] h-8 text-[32px] font-semibold text-right text-white">
          نظر کاربران
        </p>
      </div>
      <div className="flex justify-start items-center self-stretch grow-0 shrink-0 gap-6 px-[61px]">
        {commentsData &&
          commentsData.map((comment) => (
            <Comment key={comment.id} text={comment.text} />
          ))}
      </div>
    </div>
  );
};

export default GridComments;
