"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src = "/videos/my-movie.mp4" }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto h-full">
      <div className="h-full relative">
        <video
          ref={videoRef}
          controls
          preload="metadata" // سریع‌تر بارگذاری اولیه (metadata)
          className="w-full rounded-md h-full object-cover" // responsive با Tailwind
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
          مرورگر شما از تگ video پشتیبانی نمی‌کند.
        </video>

        {/* دکمهٔ دلخواه برای کنترل (اختیاری) */}
        <button
          onClick={togglePlay}
          className="absolute left-4 bottom-4 bg-black/50 text-white px-3 py-1 rounded"
          aria-pressed={playing}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
