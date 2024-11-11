import React from 'react'

const Choice = () => {
    return (
        <>
            <section className="why-choose-section section-spacing">
                <div className="container-fluid why_prism position-relative">
                    <div className="shapes-circle d-xl-block d-lg-block d-none position-absolute" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-12">
                                <div className="section-heading text-center">
                                    <h2 className="title">Why Prism Infoways</h2>
                                    <p>Your Industry-Specific Technology Partner</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 growth text-lg-start text-center">
                                <div className="content mb-4">
                                    Prism Infoways stands out as a trusted IT partner because we
                                    don’t believe in one-size-fits-all solutions. Instead, we
                                    specialize in crafting custom technology solutions that align
                                    perfectly with the needs of various industries. Our commitment
                                    to understanding the unique challenges of each sector ensures
                                    that we deliver high-quality, impactful solutions every time.
                                </div>
                                <a
                                    href="javascript:;"
                                    className="themebtn mb-lg-0 mb-md-4 mb-0"
                                >
                                    {" "}
                                    Get Free Consultancy
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card why_choose_card">
                                            <div className="card-body text-center">
                                                <div className="card_heading text-white mb-2">2K+</div>
                                                <div className="cnts">Successful Projects</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card why_choose_card">
                                            <div className="card-body text-center">
                                                <div className="card_heading text-white mb-2">10K+</div>
                                                <div className="cnts">
                                                    Satisfied Clients Across Industries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card why_choose_card">
                                            <div className="card-body text-center">
                                                <div className="card_heading text-white mb-2">15+</div>
                                                <div className="cnts">Years of Industry Expertise</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card why_choose_card">
                                            <div className="card-body text-center">
                                                <div className="card_heading text-white mb-2">50+</div>
                                                <div className="cnts">
                                                    Certifications in Global Technology Standards
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choice
