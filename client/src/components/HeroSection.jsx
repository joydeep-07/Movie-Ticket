import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, Calendar, Clock, ClockAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div
      className="
    relative flex h-screen flex-col items-start justify-center gap-4
    px-6 md:px-16 lg:px-36
    bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center
  "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        <img
          src={assets.marvelLogo}
          alt=""
          className="max-h-11 lg:h-11 mt-20"
        />

        <h1 className="text-5xl font-cinematic py-5 md:text-[70px] md:leading-18 max-w-110">
          Captain America <br /> The first Avenger
        </h1>

        <div className="flex justify-start py-2 gap-4 text-gray-300">
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4.5 h-4.5" /> 2018
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4.5 h-4.5" /> 2h 8m
          </div>
        </div>

        <p className="max-w-md text-sm pb-10 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          excepturi architecto neque possimus corrupti, veritatis obcaecati
          eaque illo! Illum modi, porro doloribus saepe dignissimos neque
          numquam odit architecto
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="flex items-center gap-1 px-6 py-3 text-sm
                 bg-primary hover:bg-primary-dull transition
                 rounded-full font-medium"
        >
          Explore Movies <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
