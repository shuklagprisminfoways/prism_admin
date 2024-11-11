import Link from "next/link";
import Banner from "./Banner";

export default function Portofolio() {
    return (
        <>
            <Banner />
            <section className="portfolio-section section-spacing">
                <div className="container-fluid h-100 position-relative portfolio">
                    <div className="container">
                        <div className="row portfolio-content align-items-center justify-content-between">
                            <div className="col-xl-6 col-md-6 mb-5">
                                <div className="portfolio_card position-relative">
                                    <div className="portfolio-img position-relative">
                                        <img src="images/service_card_1.webp" className="img-fluid" alt="service_card_1" />
                                    </div>
                                    <div className="contnt p-3 text-center position-absolute w-100 overflow-hidden">
                                        <Link href="/singleportofolio/the-rise-of-design">
                                            <div className="portfolio-title">The rise of design</div>
                                            <div className="cotnt">
                                                Advertising
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 mb-5">
                                <div className="portfolio_card position-relative">
                                    <div className="portfolio-img position-relative">
                                        <img src="images/service_card_2.webp" className="img-fluid" alt="service_card_1" />
                                    </div>
                                    <div className="contnt p-3 text-center position-absolute w-100 overflow-hidden">
                                        <Link href="/singleportofolio/the-rise-of-design">
                                            <div className="portfolio-title">The rise of design</div>
                                            <div className="cotnt">
                                                Advertising
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 mb-md-0 mb-5">
                                <div className="portfolio_card position-relative">
                                    <div className="portfolio-img position-relative">
                                        <img src="images/service_card_3.webp" className="img-fluid" alt="service_card_1" />
                                    </div>
                                    <div className="contnt p-3 text-center position-absolute w-100 overflow-hidden">
                                        <Link href="/singleportofolio/the-rise-of-design">
                                            <div className="portfolio-title">The rise of design</div>
                                            <div className="cotnt">
                                                Advertising
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="portfolio_card position-relative">
                                    <div className="portfolio-img position-relative">
                                        <img src="images/service_card_4.webp" className="img-fluid" alt="service_card_1" />
                                    </div>
                                    <div className="contnt p-3 text-center position-absolute w-100 overflow-hidden">
                                        <Link href="/singleportofolio/the-rise-of-design">
                                            <div className="portfolio-title">The rise of design</div>
                                            <div className="cotnt">
                                                Advertising
                                            </div>
                                        </Link>
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
