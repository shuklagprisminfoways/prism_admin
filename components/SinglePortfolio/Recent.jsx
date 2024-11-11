import Link from "next/link";
import Shift from "./Shift";

export default function Recent() {
    return (
        <>
            <section className="recent-section section-spacing ">
                <div className="container-fluid h-100 position-relative recent-post">
                    <div className="container">
                        <div className="row ports align-items-center justify-content-around">
                            <div className="col-xl-11">
                                <div className="mb-5 d-flex justify-content-between align-items-center">
                                    <h2 className=" text-white ">Recent Projects</h2>
                                    <Link href="javascript:;" className="themebtn">View Project</Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6 mb-md-0 mb-4">
                                <div className="cards">
                                    <div className="card-img">
                                        <img src="/images/recent-post-1.jpg" className="img-fluid rounded-5" alt="recent-post-1" />
                                    </div>
                                    <div className="card-body">
                                        <div className="h2 text-white mt-4">
                                            Creating eco-friendly websites for sustainability.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6">
                                <div className="cards">
                                    <div className="card-img">
                                        <img src="/images/recent-post-2.jpg" className="img-fluid rounded-5" alt="recent-post-2" />
                                    </div>
                                    <div className="card-body">
                                        <div className="h2 text-white mt-4">Crafting memorable visual identities for brands.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Shift />
        </>
    )
}
