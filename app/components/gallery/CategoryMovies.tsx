import GridGallery from "./Grid-Gallery";

const CategoryMovies = () => {
  const categories = [
    {
      id: 1,
      name: "جدیدترین ها ",
    },
    {
      id: 2,
      name: "پرطرفدار",
    },
    {
      id: 3,
      name: "معمایی",
    },
    {
      id: 4,
      name: "جنایی",
    },
  ];
  return (
    <>
      {categories &&
        categories.map((category) => (
          <GridGallery key={category.id} name={category.name} />
        ))}

      <button className="px-3 py-2  w-[124px] h-[52px] rounded-lg bg-violet border border-violet-500/20 hover:scale-110 duration-300 transform-gpu transition backdrop-blur-md text-xl font-medium">
        بیشتر
      </button>
    </>
  );
};

export default CategoryMovies;
