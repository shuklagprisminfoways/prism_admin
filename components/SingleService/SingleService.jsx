"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const SingleService = () => {
  const { slug } = useParams();


  const imageMap = {
    "it-consulting": "services_1.webp",
    "web-development": "services_2.webp",
    "cloud-solutions": "services_3.webp",
    "custom-software": "services_4.webp",
    "e-commerce": "services_5.webp",
    "digital-marketing": "services_6.webp",
    "mobile-apps": "services_7.webp",
    "ui-ux": "services_8.webp",
  }

  const serviceDescriptions = {
    "it-consulting": [
      "In the rapidly evolving digital landscape, having a strong technology strategy is crucial for businesses to stay ahead of the curve and achieve sustainable growth. At Prism Infoways, our team of experienced IT consultants provides expert guidance and tailored solutions to help you navigate the complexities of technology and align it with your business objectives.",
      "Our IT consulting services cover a wide range of areas, including technology roadmaps, IT infrastructure optimization, cybersecurity assessments, cloud strategy development, digital transformation initiatives, and IT strategy development.",
      "Our IT consultants work closely with your stakeholders to gather requirements, assess your existing IT landscape, and develop a comprehensive technology roadmap that aligns with your business goals and future growth plans."
    ],
    "web-development": [
      "Our web development services offer cutting-edge solutions tailored to meet modern business needs. We specialize in creating responsive, scalable, and secure web applications that enhance your online presence and drive business growth.",
      "We use the latest technologies and best practices to ensure that your web applications are fast, reliable, and easy to maintain.",
      "From e-commerce platforms to content management systems, we have the expertise to build custom solutions that match your specific requirements."
    ],
    "cloud-solutions": [
      "Our cloud solutions help businesses scale and improve operational efficiency while ensuring data security and cost optimization.",
      "We offer cloud migration, cloud architecture design, and managed cloud services that empower organizations to harness the power of the cloud.",
      "Our team ensures seamless cloud integration, high availability, and disaster recovery planning to keep your business resilient.",
    ],
    "custom-software": [
      "Our cloud solutions help businesses scale and improve operational efficiency while ensuring data security and cost optimization.",
      "We offer cloud migration, cloud architecture design, and managed cloud services that empower organizations to harness the power of the cloud.",
      "Our team ensures seamless cloud integration, high availability, and disaster recovery planning to keep your business resilient.",
    ],
    "e-commerce": [
      "Our cloud solutions help businesses scale and improve operational efficiency while ensuring data security and cost optimization.",
      "We offer cloud migration, cloud architecture design, and managed cloud services that empower organizations to harness the power of the cloud.",
      "Our team ensures seamless cloud integration, high availability, and disaster recovery planning to keep your business resilient.",
    ],
    "digital-marketing": [
      "Our cloud solutions help businesses scale and improve operational efficiency while ensuring data security and cost optimization.",
      "We offer cloud migration, cloud architecture design, and managed cloud services that empower organizations to harness the power of the cloud.",
      "Our team ensures seamless cloud integration, high availability, and disaster recovery planning to keep your business resilient.",
    ],
    "mobile-apps": [
      "Our cloud solutions help businesses scale and improve operational efficiency while ensuring data security and cost optimization.",
      "We offer cloud migration, cloud architecture design, and managed cloud services that empower organizations to harness the power of the cloud.",
      "Our team ensures seamless cloud integration, high availability, and disaster recovery planning to keep your business resilient.",
    ],
    "ui-ux": [
      "Our cloud solutions help businesses scale and improve operational efficiency while ensuring data security and cost optimization.",
      "We offer cloud migration, cloud architecture design, and managed cloud services that empower organizations to harness the power of the cloud.",
      "Our team ensures seamless cloud integration, high availability, and disaster recovery planning to keep your business resilient.",
    ]
  };

  const sidebarItems = [
    "Expert IT Consulting for Strategic Growth",
    "Cutting-Edge Web Development Solutions",
    "Custom Software Solutions Tailored to Your Needs",
    "Scalable and Secure Cloud Solutions",
    "Powerful E-commerce Solutions for Online Success",
    "Comprehensive Digital Marketing Solutions",
    "Innovative Mobile App Development Solutions",
    "Captivating UI/UX Design Solutions"
  ];


  const imagePath = `/images/${imageMap[slug] || "default_image.webp"}`;

  return (
    <>
      <section className="single-service-section section-spacing">
        <div className="container-fluid h-100 position-relative single-page">
          <div className="container">
            <div className="row service-content">
              <div className="col-lg-12">
                <div className="service-cnts">
                  <div className="w-100 p-lg-5 p-4 pb-lg-0 pb-0">
                    <img
                      src={imagePath}
                      className="img-fluid w-100"
                      alt={`services_${slug}`}
                    />
                  </div>
                  <div className="service_description p-lg-5 p-4">
                    {serviceDescriptions[slug]?.map((description, index) => (
                      <div key={index} className="contnt mb-3">
                        {description}
                      </div>
                    ))}
                    {!serviceDescriptions[slug] && (
                      <p>No specific description available for this service.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none">
                <div className="d-block service_sidebar mt-lg-0 p-0 sticky-side">
                  <ul className="p-4 w-100 mt-lg-0 mt-4">
                    {sidebarItems.map((item, index) => (
                      <li key={index} className={index === 0 ? "active" : ""}>
                        <Link href="/" className="text-light">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            style={{ width: 18 }}
                          >
                            <path
                              d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3 17.7-30.3 7.4-44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4 10.3 17.7-30.3 7.4-44.6s-30.3 17.7-44.6 7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                              fill="currentcolor"
                            />
                          </svg>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleService;