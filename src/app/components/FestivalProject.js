/* eslint-disable @next/next/no-img-element */
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Tween } from "gsap/gsap-core";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
const FestivalProject = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- selecting all horizontal sections
    });
    return () => ctx.revert();

  }, []);

  return (
    <main id="festival-container">
      {/* ---------- section 01 ---------- */}
      <section className="horizontal-sections festival-bg">
        {/* <section className="heading-container pl-8 flex flex-col justify-center items-center">
          <h1 className="mb-4 w-full lg:w-1/2  text-sm lg:text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white">

          </h1>
        </section> */}
      </section>
    </main>
  );
};
export default FestivalProject;
