import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="footer-section section-spacing py-5">
        <div className="container-fluid p-md-5 whole-footer">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-xl-0 mb-4">
              <div className="footer-contact">
                <div className="col-12">
                  <img
                    src="/images/logo/logo-white.webp"
                    className="footer-logo img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="footer-para col-12 mb-xxl-0 mb-0 py-3">
                  #1 Stop Solution For Your Online Growth
                </div>
                <div className="footercontent mt-1">
                  <form action="#">
                    <div className="newsletterbox">
                      <div className="newsletterinput w-100">
                        <div className="forminput">
                          <input
                            className="form-control"
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Your mail address"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="newsletterbutton">
                        <button type="submit">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.00098 7H13.001"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00098 1L13.001 7L7.00098 13"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="newsletterbox mt-3">
                      <div className="newsletterinput w-100">
                        <div className="forminput ">
                          <input
                            className="form-control"
                            name="number"
                            type="number"
                            id="number"
                            placeholder="Your contect number"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="newsletterbutton">
                        <button>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.00098 7H13.001"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00098 1L13.001 7L7.00098 13"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="social-media mt-4">
                  <ul className="d-flex ps-0">
                    <li>
                      <Link
                        href="http://facebook.com"
                        className="text-white d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://instagram.com"
                        className="text-white d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://linkedin.com"
                        className="text-white d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://youtube.com"
                        className="text-white d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://twitter.com"
                        className="text-white d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 services mb-xl-0 mb-4">
              <div className="text-white company mb-xxl-3">
                <span className="ps-xxl-4 ps-xl-4 ps-lg-4 ps-md-4 ps-sm-0 ps-0">
                  {" "}
                  Services
                </span>
              </div>
              <ul className="pt-xxl-4 pt-xl-4 pt-lg-4 pt-md-4 pt-sm-4 pt-4 ps-xxl-4 ps-xl-4 ps-lg-4 ps-md-4 ps-sm-0 ps-0">
                <li>
                  <Link
                    href="/singleservice/it-consulting"
                    className="text-white position-relative"
                  >
                    Expert IT Consulting for Strategic Growth
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/web-development"
                    className="text-white position-relative"
                  >
                    Cutting-Edge Web Development Solutions{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/custom-software"
                    className="text-white position-relative"
                  >
                    Custom Software Solutions Tailored to Your Needs{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/cloud-solutions"
                    className="text-white position-relative"
                  >
                    Scalable and Secure Cloud Solutions{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/e-commerce"
                    className="text-white position-relative"
                  >
                    Powerful E-commerce Solutions for Online Success{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/digital-marketing"
                    className="text-white position-relative"
                  >
                    Comprehensive Digital Marketing Solutions{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/mobile-apps"
                    className="text-white position-relative"
                  >
                    Innovative Mobile App Development Solutions{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/singleservice/ui-ux"
                    className="text-white position-relative"
                  >
                    Captivating UI/UX Design Solutions{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 services mb-md-0 mb-4">
              <div className="text-white company mb-xxl-3">
                <span className="ps-xxl-4 ps-xl-4 ps-lg-4 ps-md-4 ps-sm-0 ps-0">
                  {" "}
                  Company
                </span>
              </div>
              <ul className="pt-xxl-4 pt-xl-4 pt-lg-4 pt-md-4 pt-sm-4 pt-4 ps-xxl-4 ps-xl-4 ps-lg-4 ps-md-4 ps-sm-0 ps-0">
                <li>
                  <Link href="/about" className="text-white position-relative">
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white position-relative"
                  >
                    Contact us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy&policy"
                    className="text-white position-relative"
                  >
                    privacy &amp; policy{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white position-relative">
                    terms &amp; conditions{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 services mb-md-0 mb-4">
              <div className="text-white company mb-xxl-3">
                <span className="ps-xxl-4 ps-xl-4 ps-lg-4 ps-md-4 ps-sm-0 ps-0">
                  {" "}
                  Community
                </span>
              </div>
              <ul className="pt-xxl-4 pt-xl-4 pt-lg-4 pt-md-4 pt-sm-4 pt-4 ps-xxl-4 ps-xl-4 ps-lg-4 ps-md-4 ps-sm-0 ps-0">
                <li>
                  <Link
                    href="/podcast"
                    className="text-white position-relative"
                  >
                    podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="text-white position-relative"
                  >
                    career{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webinar"
                    className="text-white position-relative"
                  >
                    webinar &amp; workshop{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footerbottom pt-5 text-center">
                  Full Copyright &amp; Design By
                  <Link href="/"> Prism Infoways Pvt Ltd</Link>- 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
