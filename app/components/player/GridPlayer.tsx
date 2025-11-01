import Card from "../gallery/Card";
import VideoPlayer from "./Player";

const GridPlayer = () => {
  return (
    <div className="grid grid-cols-[auto_auto_auto] grid-rows-2 gap-6">
      <div className="row-span-2">
        <VideoPlayer src="/videos/trailer.mp4" />
      </div>

      <Card image={"/images/image-66.png"} />

      <Card image={"/images/image-66.png"} />

      <Card image={"/images/image-66.png"} />

      <Card image={"/images/image-66.png"} />
    </div>
  );
};

export default GridPlayer;
