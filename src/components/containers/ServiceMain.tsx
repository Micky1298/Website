import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    padding: "30px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  };

  const wrapperStyle = {
    height: "1600px", // Increased from 1400px to show all content including CTA
  };

  const introStyle = {
    marginBottom: "1.5rem",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "2rem",
    flexGrow: 1,
  };

  const subheadingStyle = {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#E3FF04",
    marginBottom: "1rem",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
  };

  const bulletPointStyle = {
    minWidth: "6px",
    height: "6px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    marginTop: "0.5rem",
  };

  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {/* First Slide */}
                <SwiperSlide>
                  <div
                    className="service-t-single-wrapper"
                    style={wrapperStyle}
                  >
                    <div className="service-t__slider-single" style={cardStyle}>
                      <div className="intro" style={introStyle}>
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="contact-us">
                            Social Media and Content Excellence
                          </Link>
                        </h4>
                      </div>
                      <div style={contentStyle}>
                        <div>
                          <h5 style={subheadingStyle}>Social Media Services</h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Social media management and content creation
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Social media strategy and consulting
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Influencer outreach and partnerships
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 style={subheadingStyle}>
                            Content and Copywriting Services
                          </h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Blog and article writing
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Copywriting for websites, ads, and social media
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Email marketing and newsletter content
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Scriptwriting for videos and animations
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="cta"
                        style={{ marginTop: "3rem", marginBottom: "2rem" }}
                      >
                        <Link href="contact-us">
                          <i className="icon-arrow-top-right"></i>
                          <span>Know more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide>
                  <div
                    className="service-t-single-wrapper"
                    style={wrapperStyle}
                  >
                    <div className="service-t__slider-single" style={cardStyle}>
                      <div className="intro" style={introStyle}>
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="contact-us">
                            Branding and Creative Design
                          </Link>
                        </h4>
                      </div>
                      <div style={contentStyle}>
                        <div>
                          <h5 style={subheadingStyle}>Branding and Identity</h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Brand strategy and positioning
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Logo and visual identity design
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Brand messaging and voice development
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Brand guidelines and consistency enforcement
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 style={subheadingStyle}>
                            Design and Creative Services
                          </h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Graphic design for digital and print media
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Packaging design
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Animation and motion graphics
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Video production and editing
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Photography and art direction
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="cta"
                        style={{ marginTop: "3rem", marginBottom: "2rem" }}
                      >
                        <Link href="contact-us">
                          <i className="icon-arrow-top-right"></i>
                          <span>Know more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Third Slide */}
                <SwiperSlide>
                  <div
                    className="service-t-single-wrapper"
                    style={wrapperStyle}
                  >
                    <div className="service-t__slider-single" style={cardStyle}>
                      <div className="intro" style={introStyle}>
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="contact-us">
                            Digital Strategy and Development
                          </Link>
                        </h4>
                      </div>
                      <div style={contentStyle}>
                        <div>
                          <h5 style={subheadingStyle}>
                            UI/UX Design and Development
                          </h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              User experience (UX) research and analysis
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              User interface (UI) design for websites and apps
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Wireframing and prototyping
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Front-end and back-end development
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Webflow and other CMS integrations
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 style={subheadingStyle}>
                            Advertising and Campaigns
                          </h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Paid advertising on Google, Facebook, Instagram,
                              LinkedIn, and other platforms
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Retargeting and remarketing strategies
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Campaign analytics and performance tracking
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 style={subheadingStyle}>
                            Digital Strategy and Growth Hacking
                          </h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Growth marketing strategy and execution
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Data analytics and reporting
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              SEO and content optimization
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Conversion rate optimization (CRO)
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Search engine marketing (SEM) and optimization
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="cta"
                        style={{ marginTop: "3rem", marginBottom: "2rem" }}
                      >
                        <Link href="contact-us">
                          <i className="icon-arrow-top-right"></i>
                          <span>Know more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Fourth Slide */}
                <SwiperSlide>
                  <div
                    className="service-t-single-wrapper"
                    style={wrapperStyle}
                  >
                    <div className="service-t__slider-single" style={cardStyle}>
                      <div className="intro" style={introStyle}>
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="contact-us">
                            Innovation and Emerging Tech Solutions
                          </Link>
                        </h4>
                      </div>
                      <div style={contentStyle}>
                        <div>
                          <h5 style={subheadingStyle}>
                            Emerging Technology and Innovative Solutions
                          </h5>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Augmented reality (AR) and virtual reality (VR)
                              content creation
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              AI-driven content and creative strategies
                            </li>
                            <li style={listItemStyle}>
                              <span style={bulletPointStyle}></span>
                              Interactive design for immersive experiences
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="cta"
                        style={{ marginTop: "3rem", marginBottom: "2rem" }}
                      >
                        <Link href="contact-us">
                          <i className="icon-arrow-top-right"></i>
                          <span>Know more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
