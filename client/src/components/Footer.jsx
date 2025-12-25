import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-7xl mx-auto">
          <div class="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div class="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl font-cinematic">
                Book
                <span className="font-cinematic text-red-500/95 mx-1">My</span>
                Ticket
              </h1>
              <div class="w-full max-w-52 h-px mt-2 bg-linear-to-r from-white/60 via-white/25 to-black"></div>
              <p class="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
                PrebuiltUI is a growing collection of beautifully designed,
                production-ready Tailwind CSS UI components.
              </p>
            </div>

            <div class="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 class="text-sm text-white font-medium">Important Links</h3>
              <div class="flex flex-col gap-2 mt-6">
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div class="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 class="text-sm text-white font-medium">Social Links</h3>
              <div class="flex flex-col gap-2 mt-6">
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Youtube
                </a>
                <a
                  href="#"
                  class="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Linkedin
                </a>
              </div>
            </div>

            <div class="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 class="text-sm text-white font-medium">Subscribe for news</h3>
              <div class="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  class="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                  required
                />
                <button
                  type="submit"
                  class="bg-linear-to-b from-[#5623D8] to-[#7B53E2] active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div class="w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-xs text-white/60">© 2025 PrebuiltUI</p>
            <div class="flex items-center gap-6">
              <a
                href="#"
                class="text-xs text-white/60 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <div class="w-px h-4 bg-white/20"></div>
              <a
                href="#"
                class="text-xs text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
