import Card from "./Card";

type categoryProps = {
  key: number;
  name: string;
};

const GridGallery = ({ name }: categoryProps) => {
  const filmsData = [
    {
      id: 1,
      src: "/images/image-66.png",
    },
    {
      id: 2,
      src: "/images/image-72.png",
    },
    {
      id: 3,
      src: "/images/image-73.png",
    },
    {
      id: 4,
      src: "/images/image-75.png",
    },
    {
      id: 5,
      src: "/images/image-73.png",
    },
    {
      id: 6,
      src: "/images/image-74.png",
    },
  ];
  return (
    <>
      <div className="mt-25 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  grid-rows-1 justify-center items-center self-stretch grow-0 shrink-0 gap-8 mx-auto px-2 relative ">
        <div className="absolute -top-20 flex justify-between items-center w-full px-2 ">
          {/* right */}
          <div>
            <p className=" text-3xl font-semibold text-right text-white">
              {name}
            </p>
          </div>
          {/* left */}
          <div className="flex justify-center items-center gap-x-2">
            <p className="grow-0 shrink-0 text-base font-medium text-left text-white">
              همه
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
                d="M10.3335 12L6.3335 8L10.3335 4"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {filmsData &&
          filmsData.map((film) => <Card key={film.id} image={film.src} />)}
      </div>
    </>
  );
};

export default GridGallery;
