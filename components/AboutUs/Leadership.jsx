
import Mission from "./Mission";

export default function Leadership() {
    return (
        <>
        <section className="leadership-section section-spacing d-none">
            <div className="container-fluid leadership position-relative">
                <div className="container">
                    <div className="testimonial-wrap-circle1 alltuchtopdown" />
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-12">
                            <div className="section-heading text-center">
                                <h2 className="title">Leadership</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="leader_content">
                                <div className="row align-items-center mx-0">
                                    <div className="col-md-6 mb-lg-0 mb-4">
                                        <div className="leader-img">
                                            <img src="images/Tejveer_Singh.webp" className="img-fluid" alt="Tejveer Singh" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pb-lg-0 pb-4">
                                            <div className="small">Co-Founder &amp; Director</div>
                                            <h2 className="heading my-2">Tejveer Singh</h2>
                                            <div className="cnts pb-4">
                                                United we stand, indivisible and proud, forging the future with the spirit of our nation.
                                            </div>
                                            <div>
                                                <ul className="social">
                                                    <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a></li>
                                                    <li><a href="tel:+1234567890"><i className="fas fa-phone-alt" /></a></li>
                                                    <li><a href="mailto:tejveer@example.com"><i className="far fa-envelope" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="leader_content">
                                <div className="row align-items-center mx-0">
                                    <div className="col-md-6 mb-lg-0 mb-4">
                                        <div className="leader-img">
                                            <img src="images/Maha_Quadari.webp" className="img-fluid" alt="Maha Qadri" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pb-lg-0 pb-4">
                                            <div className="small">Co-Founder &amp; Director</div>
                                            <h2 className="heading my-2">Maha Qadri</h2>
                                            <div className="cnts pb-4">
                                                If you want to meet the person who is responsible for your success/failure, just look at the face in the mirror...
                                            </div>
                                            <div>
                                                <ul className="social">
                                                    <li><a href="https://wa.me/1234567891" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a></li>
                                                    <li><a href="tel:+1234567891"><i className="fas fa-phone-alt" /></a></li>
                                                    <li><a href="mailto:maha@example.com"><i className="far fa-envelope" /></a></li>
                                                </ul>
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
        <Mission/>
        </>
    );
}
