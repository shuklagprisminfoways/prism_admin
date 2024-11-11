import Link from "next/link";
import Banner from "./Banner";

export default function Career() {
    return (
        <>
        <Banner/>
        <section className="career-section section-spacing">
            <div className="container-fluid h-100 position-relative career">
                <div className="container">
                    <div className="row career-content align-items-center justify-content-between">
                        <div className="col-xl-5 col-md-6">
                            <div className="contnt">
                                <div className="career-title mb-2">Career Advancement Counseling </div>
                                <div className="cotnt pb-4">
                                    Our Career Advancement Counseling offers tailored guidance to help you identify growth opportunities, enhance key skills, and overcome career challenges. With expert counseling, we’ll guide you toward achieving your professional goals and long-term success.                          </div>
                                <div className="resnt_career d-flex align-items-center ">
                                    <img src="images/resent-1.webp" className="img-fluid" alt="resent-1" />
                                    <span>1K+</span>
                                </div>
                                <Link href="/" className="themebtn mt-4"> Get Free Consultancy</Link>
                            </div>
                        </div>
                        <div className="col-md-6 my-md-0 my-4">
                            <div className="career-img">
                                <img src="images/career_img_1.webp" className="img-fluid" alt="career_img_1" />
                            </div>
                        </div>
                    </div>
                    <div className="row career-content align-items-center justify-content-between my-lg-0 my-5">
                        <div className="col-xl-5 col-md-6 order-md-1 order-2 my-md-0 my-4">
                            <div className="career-img">
                                <img src="images/career_img_2.webp" className="img-fluid" alt="career_img_2" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 order-md-2 order-1">
                            <div className="contnt">
                                <div className="career-title mb-2">Join Prism Infoways Team </div>
                                <div className="cotnt pb-4">
                                    If you’re ready to grow with Prism Infoways, we offer a variety of career opportunities across multiple domains. Join our talented team and take the next step in your professional journey. We foster a collaborative, growth-oriented environment where your skills are valued and nurtured.                          </div>
                                <div className="resnt_career d-flex align-items-center ">
                                    <img src="images/resent-1.webp" className="img-fluid" alt="resent-1" />
                                    <span>50+</span>
                                </div>
                                <Link href="/job" className="themebtn mt-4"> Join Prism Infoways Team</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row career-content align-items-center justify-content-between">
                        <div className="col-xl-5 col-md-6">
                            <div className="contnt">
                                <div className="career-title mb-2">Become A Mentor</div>
                                <div className="cotnt pb-4">
                                    Ready to inspire others with your expertise? Become a mentor with India’s top digital solutions provider and play a key role in shaping the next generation of professionals. At Prism Infoways, mentorship is at the heart of creating future leaders and driving growth within the industry.                          </div>
                                <div className="resnt_career d-flex align-items-center ">
                                    <img src="images/resent-1.webp" className="img-fluid" alt="resent-1" />
                                    <span>30+</span>
                                </div>
                                <a href="javascript:;" className="themebtn mt-4"> Become A Mentor</a>
                            </div>
                        </div>
                        <div className="col-md-6 my-md-0 my-4">
                            <div className="career-img">
                                <img src="images/career_img_3.webp" className="img-fluid" alt="career_img_1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
