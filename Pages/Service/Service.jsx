"use client"; // Ensures the component runs only on the client side

import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from 'next/link';

const Service = () => {
  const services = [
    {
      image: "images/services_1.webp",
      alt: "services_1",
      content: "Expert IT Consulting for Strategic Growth"
    },
    {
      image: "images/services_2.webp",
      alt: "services_2",
      content: "Cutting-Edge Web Development Solutions"
    },
    {
      image: "images/services_3.webp",
      alt: "services_3",
      content: "Custom Software Solutions Tailored to Your Needs"
    },
    {
      image: "images/services_4.webp",
      alt: "services_4",
      content: "Scalable and Secure Cloud Solutions"
    },
    {
      image: "images/services_5.webp",
      alt: "services_5",
      content: "Powerful E-commerce Solutions for Online Success"
    },
    {
      image: "images/services_6.webp",
      alt: "services_6",
      content: "Comprehensive Digital Marketing Solutions"
    }
  ];

  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window !== 'undefined') {
        // Dynamically import jQuery and owl.carousel
        const $ = (await import('jquery')).default;
        window.$ = window.jQuery = $; // Attach jQuery to window object

        // Initialize owl.carousel after jQuery is available and DOM is fully loaded
        $(document).ready(async () => {
          await import('owl.carousel');
          $('.service-slider').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHover: true,
            items: 1,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              1000: {
                items: 3
              },
            },
          });
        });
      }
    };

    loadCarousel();
  }, []);

  return (
    <section className="service-section section-spacing">
      <div className="container-fluid service_card position-relative">
        <div className="service-wrap-circle1" />
        <div className="circle02">
          <img src="images/circle002.png" className="img-fluid" alt="circle002" />
        </div>
        <div className="right-circle">
          <img src="images/right-vector.png" className="img-fluid" alt="right-vector" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 slider h-100 owl-carousel service-slider">
              {services.map((service, index) => (
                <div className="item h-100" key={index}>
                  <div className="card">
                    <img src={service.image} className="img-fluid" alt={service.alt} />
                    <div className="card-body">
                      <div className="card_content">{service.content}</div>
                      <div className="learn_more_btn">
                        <Link href="/singleservices" className="learn_more">
                          Learn more <i className="fas fa-arrow-right ms-1" />
                        </Link>
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

export default Service;
