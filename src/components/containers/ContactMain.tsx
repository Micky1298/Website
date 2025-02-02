"use client";

import type React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
    message: "",
    countryCode: "",
    phoneNumber: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData((prevState) => ({
      ...prevState,
      countryCode: country.dialCode,
      phoneNumber: value.slice(country.dialCode.length),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const subjectToSend =
      formData.subject === "other" ? formData.customSubject : formData.subject;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_REAP_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_REAP_EMAILJS_TEMPLATE_ID!,
        {
          to_name: "Sai Tej",
          from_name: formData.name,
          reply_to: formData.email,
          subject: subjectToSend,
          message: formData.message,
          country_code: formData.countryCode,
          phone_number: formData.phoneNumber,
        },
        process.env.NEXT_PUBLIC_REAP_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        customSubject: "",
        message: "",
        countryCode: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://maps.google.com/maps?width=660&amp;height=800&amp;hl=en&amp;q=hyderabad&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      onSubmit={handleSubmit}
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="name"
                            id="contactName"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="email"
                            name="email"
                            id="contactEmail"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input phone-input-wrapper">
                        <PhoneInput
                          country={"in"}
                          value={formData.countryCode + formData.phoneNumber}
                          onChange={handlePhoneChange}
                          inputProps={{
                            name: "phone",
                            required: true,
                            placeholder: "Phone Number",
                          }}
                        />
                      </div>
                      <div className="group-input">
                        <select
                          className="subject-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Subject</option>
                          <option value="Account">Account</option>
                          <option value="Service">Service</option>
                          <option value="Pricing">Pricing</option>
                          <option value="Support">Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {formData.subject === "other" && (
                        <div className="group-input">
                          <input
                            type="text"
                            name="customSubject"
                            id="customSubject"
                            placeholder="Enter custom subject"
                            value={formData.customSubject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      )}
                      <div className="group-input">
                        <textarea
                          name="message"
                          id="contactMessage"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button
                          type="submit"
                          className="btn btn--primary"
                          disabled={status === "sending"}
                        >
                          {status === "sending" ? "Sending..." : "Send"}
                          <i className="ml-2 fa-solid fa-arrow-up-right"></i>
                        </button>
                      </div>
                    </form>
                    {status === "success" && (
                      <p className="mt-4 text-green-600">
                        Your message has been sent successfully!
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 text-red-600">
                        There was an error sending your message. Please try
                        again.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .phone-input-wrapper {
          position: relative;
        }

        .react-tel-input .form-control {
          width: 100% !important;
          height: 60px !important;
          background-color: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 0 !important;
          color: #fff !important;
          font-size: 16px !important;
          padding: 0 0 0 75px !important;
          transition: all 0.3s ease-in-out !important;
        }

        .react-tel-input .form-control:focus {
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: none !important;
          outline: none !important;
        }

        .react-tel-input .flag-dropdown {
          background-color: transparent !important;
          border: none !important;
          border-radius: 0 !important;
        }

        .react-tel-input .selected-flag {
          background-color: transparent !important;
          border-radius: 0 !important;
          padding: 0 0 0 20px !important;
        }

        .react-tel-input .selected-flag:hover,
        .react-tel-input .selected-flag:focus,
        .react-tel-input .selected-flag.open {
          background-color: transparent !important;
        }

        .react-tel-input .country-list {
          background-color: #1c1c1c !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 0 !important;
          margin-top: 0 !important;
        }

        .react-tel-input .country-list .country {
          padding: 10px 15px !important;
          color: #fff !important;
        }

        .react-tel-input .country-list .country:hover,
        .react-tel-input .country-list .country.highlight {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        .react-tel-input .country-list .search {
          background-color: #1c1c1c !important;
          padding: 10px !important;
        }

        .react-tel-input .country-list .search-box {
          background-color: transparent !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #fff !important;
          font-size: 16px !important;
          margin: 0 !important;
          padding: 10px !important;
        }

        .subject-select {
          width: 100%;
          height: 60px;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0;
          color: #fff;
          font-size: 16px;
          padding: 0;
          appearance: none;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0 center;
          background-size: 16px;
        }

        .subject-select:focus {
          border-color: rgba(255, 255, 255, 0.3);
          outline: none;
        }

        .subject-select option {
          background-color: #1c1c1c;
          color: #fff;
          padding: 10px;
        }

        /* Placeholder styling */
        .react-tel-input .form-control::placeholder,
        .subject-select:invalid {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Focus states */
        .group-input input:focus,
        .group-input textarea:focus,
        .subject-select:focus {
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Updated button styles */
        .btn.btn--primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 24px;
          color: #fff;
          border: none;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .btn.btn--primary:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }

        .btn.btn--primary i {
          margin-left: 10px;
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .btn.btn--primary:hover i {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
