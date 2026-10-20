import React from 'react';
import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
    return (
        <div>
          
    <section className="mx-4 mt-5 overflow-hidden rounded-3xl border border-gray-800 bg-[#141519] text-white md:mx-6">

      <div className="grid min-h-[500px] items-center gap-8 px-6 py-12 md:grid-cols-2 md:px-12 lg:px-16">

        {/* Left Content */}
        <div className="z-10">

          <p className="mb-6 text-sm font-bold uppercase tracking-widest text-[#b8f531]">
            <span className="mr-3 inline-block w-8 border-t-2 border-[#b8f531] align-middle"></span>
            Workout Library
          </p>

          <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Train With Intent.
            <br />
            <span className="text-[#b8f531]">
              Log Every Set.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          <button className="btn mt-8 h-14 border-none bg-[#b8f531] px-8 text-base font-bold uppercase text-black shadow-none hover:bg-[#a6df25]">
            Browse Workouts
            <span className="ml-2 text-xl">→</span>
          </button>

        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">

          <div className="absolute right-5 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#b8f531]/10 blur-3xl"></div>

          <Image
            src={bannerImage}
            alt="Workout illustration"
            priority
            className="relative z-10 h-auto w-full max-w-[480px] object-contain"
          />

        </div>

      </div>

    </section>

        </div>

       
    );
};

export default Banner;