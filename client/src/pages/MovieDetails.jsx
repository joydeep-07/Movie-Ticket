import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import { StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);

    setShow({
      movie: show,
      dateTime: dummyDateTimeData,
    });
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 py-10 md:px-16 lg:px-40 pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="w-72 md:w-80 lg:w-66 mx-auto md:mx-0 rounded-2xl object-cover shadow-lg"
        />

        {/* Details */}
        <div className="relative flex flex-col gap-4">
          <BlurCircle top="-80px" left="-80px" />

          <span className="text-sm tracking-widest text-primary uppercase">
            English
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {show.movie.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            <span>{show.movie.vote_average.toFixed(1)} User Rating</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
            {show.movie.overview}
          </p>

          <p className="text-sm text-gray-300">
            {timeFormat(show.movie.runtime)} •{" "}
            {show.movie.genres.map((g) => g.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="pt-40 text-center text-gray-400">Loading...</div>
  );
};

export default MovieDetails;
