import Leadership from './Leadership'
export default function Choose() {
    return (
        <>
         <Leadership/>
        <section className="why-choose-section about_why section-spacing">
            <div className="container-fluid why_prism position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-12">
                            <div className="section-heading text-center">
                                <h2 className="title">Why Choose Prism Infoways?</h2>
                                <p>
                                    Your Partner for Digital Transformation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="card why_choose_card">
                                <div className="card-body text-center">
                                    <div className="card_heading text-white mb-2">2K+</div>
                                    <div className="cnts">Successful Projects</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card why_choose_card">
                                <div className="card-body text-center">
                                    <div className="card_heading text-white mb-2">10K+</div>
                                    <div className="cnts">Satisfied Clients Across Industries</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card why_choose_card">
                                <div className="card-body text-center">
                                    <div className="card_heading text-white mb-2">15+</div>
                                    <div className="cnts">Years of Industry Expertise</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card why_choose_card">
                                <div className="card-body text-center">
                                    <div className="card_heading text-white mb-2">50+</div>
                                    <div className="cnts">Certifications in Global Technology Standards</div>
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
