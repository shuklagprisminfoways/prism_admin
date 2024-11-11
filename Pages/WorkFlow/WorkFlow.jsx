import React from 'react'

const WorkFlow = () => {
  return (
    <>
       <section className="our-workflow-section section-spacing">
        <div className="container-fluid workflow ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-12">
                <div className="section-heading text-center">
                  <h2 className="title">Our Workflow</h2>
                  <p>
                    We have made it very simple for you to grow online, you need
                    to follow the simple steps given below
                  </p>
                </div>
              </div>
            </div>
            <div className="row benefit-cards">
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                <div className="card card1 h-100">
                  <div className="card-body">
                    <div className="icon-container">
                      <img src="images/step1.webp" alt="step1" />
                    </div>
                    <h3 className="text-white my-3">Winning Investment</h3>
                    <p>
                      Providing opportunities for public offerings, enabling
                      easy access to investments in global markets.
                    </p>
                  </div>
                  <div className="bg-1 d-flex align-items-end justify-content-center" />
                  <div className="bg-2 d-flex align-items-end justify-content-center" />
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                <div className="card card2 h-100">
                  <div className="card-body">
                    <div className="icon-container">
                      <img src="images/step2.webp" alt="step1" />
                    </div>
                    <h3 className="text-white my-3">Easy-to-Use System</h3>
                    <p>
                      Users can easily track &amp; manage transactions with a
                      user-friendly platform and secure environment.
                    </p>
                  </div>
                  <div className="bg-1 d-flex align-items-end justify-content-center" />
                  <div className="bg-2 d-flex align-items-end justify-content-center" />
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card3 h-100">
                  <div className="card-body">
                    <div className="icon-container">
                      <img src="images/step3.webp" alt="step1" />
                    </div>
                    <h3 className="text-white my-3">Community Rewards</h3>
                    <p>
                      Members gain rewards through continued participation and
                      blockchain-based incentives.
                    </p>
                  </div>
                  <div className="bg-1 d-flex align-items-end justify-content-center" />
                  <div className="bg-2 d-flex align-items-end justify-content-center" />
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card4 h-100">
                  <div className="card-body">
                    <div className="icon-container">
                      <img src="images/step4.webp" alt="step1" />
                    </div>
                    <h3 className="text-white my-3">
                      Promoting Digital Growth
                    </h3>
                    <p>
                      Our team delivers top-notch online growth solutions,
                      ensuring your business reaches its full potential.
                    </p>
                  </div>
                  <div className="bg-1 d-flex align-items-end justify-content-center" />
                  <div className="bg-2 d-flex align-items-end justify-content-center" />
                </div>
              </div>
              <div className="col-12 mt-lg-5 mt-sm-4 mt-2 text-center">
                <a href="javascript:;" className="themebtn">
                  {" "}
                  Get Free Consultancy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkFlow
