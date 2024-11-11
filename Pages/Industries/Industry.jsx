"use client"; // Ensures the component runs only on the client side

import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Industry = () => {
  // Define the industries array here
  const industries = [
    {
      image: "images/online_earning_1.webp",
      alt: "online_earning_1",
      heading: "Digital Products",
      content: "Start online earning with Digital Products",
    },
    {
      image: "images/online_earning_2.webp",
      alt: "online_earning_2",
      heading: "Drop Shipping",
      content: "Start online earning with Drop Shipping",
    },
    {
      image: "images/online_earning_3.webp",
      alt: "online_earning_3",
      heading: "Drop Servicing",
      content: "Start online earning with Drop Servicing",
    },
    {
      image: "images/online_earning_4.webp",
      alt: "online_earning_4",
      heading: "Teaching & Tutoring",
      content: "Start online earning with Teaching & Tutoring",
    },
    {
      image: "images/online_earning_5.webp",
      alt: "online_earning_5",
      heading: "Affiliate Marketing",
      content: "Start online earning with Affiliate Marketing",
    },
    {
      image: "images/online_earning_6.webp",
      alt: "online_earning_6",
      heading: "Blogging & Web Stories",
      content: "Start online earning with Blogging & Web Stories",
    },
    {
      image: "images/online_earning_7.webp",
      alt: "online_earning_7",
      heading: "Online Consultancy",
      content: "Start online earning with Online Consultancy",
    },
  ];

  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window !== 'undefined') {
        const $ = (await import('jquery')).default;
        window.$ = window.jQuery = $;

        $(document).ready(async () => {
          await import('owl.carousel');
          $('.earning-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHover: false,
            items: 4,
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 4 },
            },
          });
        });
      }
    };

    loadCarousel();
  }, []);

  return (
    <section className="earning-section section-spacing">
      <div className="container-fluid earning_card">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-12">
              <div className="section-heading text-center">
                <div className="subtitle">Industries We Serve</div>
                <h2 className="title">Tailored IT Solutions for Every Industry</h2>
                <p>
                  At Prism Infoways, we specialize in delivering customized IT
                  solutions to a variety of industries. Our deep understanding
                  of sector-specific challenges enables us to provide
                  cutting-edge technology services that meet the unique
                  demands of businesses in each industry.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 slider h-100 owl-carousel earning-slider">
              {industries.map((industry, index) => (
                <div className="item h-100" key={index}>
                  <div className="card overflow-hidden position-relative">
                    <img
                      src={industry.image}
                      className="img-fluid"
                      alt={industry.alt}
                    />
                    <div className="card-body position-absolute">
                      <div className="card_heading h4">{industry.heading}</div>
                      <div className="card_content">{industry.content}</div>
                      <div className="view_detail_btn">
                        <a href="javascript:;" className="view_detail">
                          View detail <i className="fas fa-arrow-right ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
