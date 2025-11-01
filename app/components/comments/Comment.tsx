type CommentProps = {
  key: number;
  text: string;
};

const Comment = ({ text }: CommentProps) => {
  return (
    <div className="flex justify-center items-center grow h-[83px] relative overflow-hidden gap-2.5 px-8 py-5 rounded-2xl bg-neutral-700/59">
      <p className="grow-0 shrink-0 w-[340px] h-[21px] text-sm font-light text-right text-white">
        {text}
      </p>
    </div>
  );
};

export default Comment;
