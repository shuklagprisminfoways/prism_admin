import React from 'react'

const Hero = () => {
  return (
    <>
     <section className="hero-section ">
        <div className="container-fluid h-100 position-relative slider hero-slider">
          <div className="hero-gradient-ball" />
          <div className="container h-100">
            <div className="row h-100 banner align-items-center justify-content-xl-between justify-content-center">
              <div className="col-xl-6 col-md-7">
                <div className="banner_content">
                  <h1 className="heading text-white">
                    Prism <span>Infoways</span>
                  </h1>
                  <p className="content text-white pb-4">
                    At Prism Infoways, we are dedicated to driving digital
                    transformation through innovative web development, app
                    development, digital marketing, and cloud solutions. Our
                    team of experts leverages cutting-edge technology to deliver
                    tailored solutions that meet the unique needs of each
                    client. With a commitment to excellence and client
                    satisfaction, we help businesses of all sizes achieve their
                    digital goals and thrive in a competitive landscape.
                  </p>
                  <a href="/" className="themebtn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-5 d-md-block d-none">
                <div className="banner-img d-flex justify-content-center">
                  <img
                    src='images/g8.png'
                    className="img-fluid h-100"
                    alt="banner_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Hero;