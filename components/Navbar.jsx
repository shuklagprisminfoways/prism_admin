
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const pathname = usePathname();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={isActive ? "header active fixed-top" : "header fixed-top"}>
        <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/images/logo/logo-white.webp" alt="logo" />
            </Link>
            <button
              className="navbar-toggler d-lg-none shadow-none border-0 rounded-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
              aria-label="Toggle navigation"
            >
              <span className="menu"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div className="offcanvas-body align-items-center">
                <div className="d-lg-flex innerlinks align-items-center justify-content-between w-100">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link className="nav-link active" href="/services">
                        Services
                      </Link>
                      <ul className="sub-menu" style={{ minWidth: "400px" }}>
                        <li>
                          <Link className="menu-item" href="/singleservice/it-consulting">
                            Expert IT Consulting for Strategic Growth
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/web-development">
                            Cutting-Edge Web Development Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/custom-software">
                            Custom Software Solutions Tailored to Your Needs
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/cloud-solutions">
                            Scalable and Secure Cloud Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/e-commerce">
                            Powerful E-commerce Solutions for Online Success
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/digital-marketing">
                            Comprehensive Digital Marketing Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/mobile-apps">
                            Innovative Mobile App Development Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/singleservice/ui-ux">
                            Captivating UI/UX Design Solutions
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/company">
                        Company
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="menu-item" href="/about">
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" href="/contact">
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/community">
                        Community
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="menu-item" href="/career">
                            Career
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <div>
                    <ul className="social">
                      <li>
                        <a href="https://wa.me/+919813273380">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+919813273380">
                          <i className="fas fa-phone-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@prisminfoways.com">
                          <i className="far fa-envelope"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

