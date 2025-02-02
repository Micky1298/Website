"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react";

import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import Aboutus from "../../../../public/Aboutus.json";

const Agency = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const percentElements = document.querySelectorAll("[data-percent]");

      percentElements.forEach((el) => {
        const skillBarPercent = el.querySelector(
          ".skill-bar-percent",
        ) as HTMLElement | null;
        const percentValue = el.parentNode?.querySelector(
          ".percent-value",
        ) as HTMLElement | null;

        if (skillBarPercent && percentValue) {
          const percent = el.getAttribute("data-percent") || "0%";
          skillBarPercent.style.width = percent;
          percentValue.textContent = percent;
        }
      });

      const axProgressBar = document.querySelectorAll(".skill-bar-single");
      axProgressBar.forEach((element) => {
        const skillBarPercent = element.querySelector(
          ".skill-bar-percent",
        ) as HTMLElement | null;
        const percentValue = element.querySelector(
          ".percent-value",
        ) as HTMLElement | null;

        if (skillBarPercent && percentValue) {
          const target = percentValue.textContent || "0%";

          const axBarTimeline = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: element,
            },
          });

          axBarTimeline.fromTo(
            skillBarPercent,
            {
              width: 0,
            },
            {
              width: target,
            },
          );

          axBarTimeline.from(
            percentValue,
            {
              textContent: "0%",
              snap: {
                textContent: 5,
              },
            },
            "<",
          );
        }
      });
    }
  }, []);

  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              {isClient && <Lottie animationData={Aboutus} loop={true} />}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">About Us</span>
              <h3 className="title title-anim">
                REAP the Rewards of <br />
                Bold Ideas and Exponential Growth.
              </h3>
              <div className="paragraph" style={{ textAlign: "justify" }}>
                <p>
                  At REAP, we're not just another agency—we're your growth
                  partner. We combine bold creativity with cutting-edge
                  technology to create solutions that don't just look great, but
                  drive real, measurable results. Whether you're a startup with
                  big ambitions or an established brand ready to level up, our
                  Growth-Driven Design ensures everything we do is tailored to
                  help you scale and attract the right audience. What sets us
                  apart? We don't believe in one-size-fits-all. We craft custom
                  strategies by blending creativity, tech, and data, always
                  staying ahead of trends. No fluff, just results. Let's push
                  boundaries and unlock your brand's true potential. Ready to
                  REAP?
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star || "/placeholder.svg"}
        alt="Image"
        className="star"
        priority
      />
      <Image
        src={dotlarge || "/placeholder.svg"}
        alt="Image"
        className="dot-large"
        priority
      />
    </section>
  );
};

export default Agency;
