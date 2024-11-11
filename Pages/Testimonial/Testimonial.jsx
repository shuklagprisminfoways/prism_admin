

"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import $ from 'jquery';
import 'animate.css';

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const testimonials = [
  {
    name: "Tarun Malik",
    position: "CEO & Founder at Emartu",
    profileImg: "images/testimonial_profile_image.webp",
    companyImg: "images/testimonial_image.webp",
    stars: 5,
    content:
      "Prism Infoways Pvt. Ltd. - one of the great web development companies in India I have ever worked with. My PHP based website developed exactly as what I wanted. With an eye for detail & a great understanding of PHP, Suffescom helped me to open up lots more possibilities of PHP for my project. Great project management with the delivery of desired result. Highly recommend this company for PHP web development!",
  },
  {
    name: "Praveen Singh",
    position: "Founder & CEO at TechPecan",
    profileImg: "images/testimonial_profile_image.webp",
    companyImg: "images/testimonial_image.webp",
    stars: 5,
    content:
      "Fantastic work! I am just impressed by their service quality and working strategy. I hired them for the development of my TechPecan application and they have satisfied me to the full by delivering the exceptional solution. They have a great expertise, are dedicated, attentive, talented and care much about the client needs. Highly recommended.",
  },
];

const TestimonialSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  return (
    <section className="testimonial-section section-spacing">
      <div className="container-fluid testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-12">
              <div className="section-heading text-center">
                <div className="subtitle mb-4 d-flex justify-content-center align-items-center">
                  <img src="images/resent-1.webp" className="img-fluid" alt="resent-1" />
                  <span>1K+</span> Happy Clients
                </div>
                <h2 className="title">Recent works & Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row testi justify-content-center">
            <div className="testimonial-wrap-circle1 alltuchtopdown"></div>
            <div className="testimonial-wrap-circle2 leftToRight"></div>
            <div className="testimonial-wrap-circle3 leftToRight"></div>
            <div className="star-shap position-absolute d-xl-block d-none">
              <img src="images/star-shap.svg" className="w-100 h-100" alt="star" />
            </div>
            <div className="col-lg-10 slider h-100">
              {isClient && (
                <OwlCarousel
                  className="owl-carousel testimonial-slider"
                  loop
                  margin={10}
                  items={1}
                  autoplay
                  autoplayTimeout={3000}
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="item h-100 animate__animated animate__fadeIn"
                      key={index}
                    >
                      <div className="testimonial_card position-relative">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-xl-6 col-md-7">
                            <div className="author d-flex align-items-center">
                              <img
                                src={testimonial.profileImg}
                                className="img-fluid author_img"
                                alt="testimonial_profile_image"
                              />
                              <div className="ms-4">
                                <h4 className="author_name text-white">{testimonial.name}</h4>
                                <h6 className="author_detial mb-0">{testimonial.position}</h6>
                              </div>
                              <ul className="star_icon d-lg-flex ms-5 d-none">
                                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                                  <li className="text-warning me-1" key={starIndex}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="testi_content mt-4">{testimonial.content}</div>
                          </div>
                          <div className="col-xl-4 col-md-5 mt-md-0 mt-4 new_testi_img">
                            <img
                              src={testimonial.companyImg}
                              className="img-fluid position-relative"
                              alt="testimonial_image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
