"use client";
import React, { useState } from 'react';

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="frequently-section section-spacing">
        <div className="container-fluid ask_question">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-12">
                <div className="section-heading text-center">
                  <div className="subtitle">Support</div>
                  <h2 className="title">Frequently Asked Questions</h2>
                  <p>
                    Still you are in dilemma, just have a look on these questions or
                    contact our team for any query
                  </p>
                  <a href="#" className="themebtn mt-4">
                    Get Free Consultancy
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion" id="accordionExample">
                  {[
                    {
                      question: "What industries does Prism Infoways serve?",
                      answer: "We offer our services across a range of industries, including healthcare, finance, education, logistics, e-commerce, and retail. Our industry-specific solutions help businesses tackle their unique challenges through innovative technology.",
                    },
                    {
                      question: "How does Prism Infoways tailor solutions to each industry?",
                      answer: "Our approach begins with deep industry research. We design customized IT solutions that address the specific pain points and goals of each sector, ensuring compliance, scalability, and future-proof technology.",
                    },
                    {
                      question: "What kind of healthcare solutions do you provide?",
                      answer: "Our healthcare solutions include telemedicine platforms, patient management systems, secure data storage, and compliance with HIPAA standards to ensure high-quality patient care and secure operations.",
                    },
                    {
                      question: "How does Prism Infoways help the retail industry?",
                      answer: "We create custom e-commerce platforms, inventory management systems, and advanced CRM tools that help retail businesses increase sales and improve customer engagement.",
                    },
                    {
                      question: "Do you provide consulting services for businesses in different industries?",
                      answer: "Yes! We offer consulting services to help businesses in various sectors understand how technology can optimize their processes, reduce costs, and improve their competitive edge.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="accordion-item bg-transparent">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button bg-transparent ${openIndex === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openIndex === index}
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 text-center mt-md-5 mt-4">
                <a href="#" className="themebtn mt-4">
                  Get Free Consultancy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frequently;
