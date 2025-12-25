import React, { useState } from "react";
import BlurCircle from "./BlurCircle";

const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoId: "WpW36ldAqnM",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoId: "-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoId: "1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoId: "umiKiW4En9g",
  },
];

const TrailerSection = () => {
  const [currentVideo, setCurrentVideo] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Video Player */}
      <div className="relative mt-6 flex justify-center">
        <BlurCircle top="120px" left="-100px" />

        <iframe
          key={currentVideo.videoId} // forces reload on change
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0`}
          title="Trailer Player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex gap-4 justify-center flex-wrap">
        {dummyTrailers.map((trailer, index) => (
          <img
            key={index}
            src={trailer.image}
            alt="Trailer thumbnail"
            onClick={() => setCurrentVideo(trailer)}
            className={`w-40 cursor-pointer rounded-md transition
              ${
                currentVideo.videoId === trailer.videoId
                  ? "ring-2 ring-red-500 scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
