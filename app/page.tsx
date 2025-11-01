import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import Footer from "./components/Footer";

import CategoryMovies from "./components/gallery/CategoryMovies";
import GridStory from "./components/story/GridStory";
import GridComments from "./components/comments/GridComments";
import GridPlayer from "./components/player/GridPlayer";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center overflow-hidden gap-6 min-h-screen bg-linear-to-b from-[#140028] via-[#0F0F19] to-[#08080E] ">
      <Header />
      <Banner />
      <GridPlayer />
      <CategoryMovies />
      <GridStory />
      <GridComments />
      <Footer />
    </div>
  );
}
