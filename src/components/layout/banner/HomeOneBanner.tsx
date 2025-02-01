"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";

import star from "public/images/star.png";
import Hero1 from "../../../../public/Hero.json";
import letstalkfinal from "/public/images/letstalkfinal.svg";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import styles from "@/HomeOneBanner.module.scss";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          yPercent: 100,
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="mb-0 text-uppercase text-start fw-9 title-anim">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      Your
                      <span
                        className={`${styles.textStroke} ${styles.creative}`}
                        data-text="360°"
                      >
                        {" "}
                        360°
                        <i
                          className="icon-arrow-top-right"
                          style={{ fontSize: "0.65em" }}
                        ></i>
                      </span>
                    </div>
                    <span className="interval" style={{ marginLeft: "0" }}>
                      Growth Partners
                    </span>
                  </div>
                </h1>

                <div className="banner__content-inner">
                  <p style={{ textAlign: "justify" }}>
                    At REAP, we're not just another agency—we're your growth
                    partner. We combine bold creativity with cutting-edge
                    technology to create solutions that don't just look great,
                    but drive real, measurable results. Whether you're a startup
                    with big ambitions or an established brand ready to level
                    up, our Growth-Driven Design ensures everything we do is
                    tailored to help you scale and attract the right audience.
                  </p>
                  <div className="cta section__content-cta"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-one-thumb d-none d-sm-block g-ban-one"
          style={{
            position: "absolute",
            right: "0",
            top: "65%",
            transform: "translateY(-50%)",
            width: "40%",
            height: "auto",
            maxHeight: "80vh",
            overflow: "hidden",
          }}
        >
          {typeof window !== "undefined" && (
            <Lottie
              lottieRef={lottieRef}
              animationData={Hero1}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
        <Image src={star || "/placeholder.svg"} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@reap.com">mail : info@reap.com</Link>
          <Link href="tel:99-2158-003-6980">Call : +91 82973 13809</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="https://www.instagram.com/" target="_blank">
            Instagram
          </Link>
          <Link href="https://x.com/" target="_blank">
            X
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
            Linkedin
          </Link>
        </div>

        <Link href="/contact-us">
          <button className="video-frame video-btn">
            <i className="icon-arrow-top-right"></i>
            <Image
              src={letstalkfinal || "/placeholder.svg"}
              alt="Image"
              priority
            />
          </button>
        </Link>

        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
