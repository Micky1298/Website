import React, { useState } from "react";

const FaqMain = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row gaper justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center agency__content section__content">
              <span className="sub-title">
                Faq's
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h3 className="title title-anim">
                Burning Questions? <br />
                REAP the Answers Fast!
              </h3>
            </div>
            <div className="accordion" id="accordion">
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 0 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can you help a business with a limited budget achieve
                    results?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textAlign: "justify" }}>
                      We use a method we call the "smart spend matrix." First,
                      we pinpoint your "minimum viable audience"—the core
                      segment most likely to convert. Then, we maximize the
                      impact of strategies like UGC, hyper-local SEO, and
                      remarketing. For example, one of our retail clients with a
                      modest budget saw a 25% increase in sales by leveraging
                      local SEO and UGC-driven social media campaigns, proving
                      that smarter spending can lead to significant returns.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 1 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What strategies do you use to adapt to sudden algorithm
                    changes on platforms like Google or Instagram?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textAlign: "justify" }}>
                      We treat algorithms like a forecast—predictable when
                      you're paying attention. Our team constantly tests
                      micro-campaigns to spot emerging trends and identify
                      shifts before they go mainstream. When Instagram
                      introduced its algorithm shift focusing more on Reels, we
                      quickly pivoted a client's content strategy, prioritizing
                      video and short-form content, which kept engagement high
                      and avoided any dips in performance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 2 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do you ensure content aligns with our brand's tone and
                    audience expectations?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textAlign: "justify" }}>
                      We develop a detailed "content DNA map" for your brand,
                      which outlines your audience's preferred words, visual
                      style, and even tone. This approach ensures that every
                      piece of content stays on-brand and resonates with your
                      target audience. For instance, when working with a tech
                      startup, we mapped out a tone that balanced technical
                      jargon with conversational language, which helped humanize
                      their messaging while staying true to their brand's
                      identity.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 3 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What's your approach to reducing ad fatigue in long-running
                    campaigns?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textAlign: "justify" }}>
                      At REAP, we believe in keeping things fresh by turning
                      your audience into co-creators. We use UGC (user-generated
                      content) to keep ads relevant without constantly
                      reinventing them. For example, with one client in the
                      fashion industry, we launched a hashtag challenge
                      encouraging customers to showcase how they styled the
                      brand's products. This not only refreshed the campaign but
                      also built deeper engagement, reducing ad fatigue and
                      boosting ROI.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 4 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFive">
                  <button
                    className={
                      (imgTab == 4 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How do you handle scaling campaigns as our business grows?
                  </button>
                </h5>
                <div
                  id="collapseFive"
                  className={`accordion-collapse collapse${
                    imgTab === 4 ? " show " : ""
                  }`}
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textAlign: "justify" }}>
                      As your business grows, we scale with you by continuously
                      refining strategies based on real-time data. Our flexible
                      approach allows us to adapt quickly, optimizing campaigns
                      across platforms. For example, when a client in the
                      e-commerce space saw exponential growth, we scaled their
                      Google Ads and Facebook campaigns by segmenting the
                      audience further and using dynamic product ads, resulting
                      in a 40% increase in conversion rates without
                      significantly increasing spend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
