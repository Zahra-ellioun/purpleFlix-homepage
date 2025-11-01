import Card from "../gallery/Card";
import VideoPlayer from "./Player";

const GridPlayer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_auto_auto] sm:grid-rows-2 gap-6">
      <div className="sm:row-span-2">
        <VideoPlayer src="/videos/trailer.mp4" />
      </div>
      <div className="mx-auto ">
        <Card image={"/images/image-66.png"} />
      </div>
      <div className="mx-auto">
        <Card image={"/images/image-66.png"} />
      </div>
      <div className="mx-auto">
        <Card image={"/images/image-66.png"} />
      </div>
      <div className="mx-auto">
        <Card image={"/images/image-66.png"} />
      </div>
    </div>
  );
};

export default GridPlayer;
