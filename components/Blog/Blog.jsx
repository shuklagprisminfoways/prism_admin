import Banner from "./Banner";

export default function Blog() {

 
    return (
        <>
            <Banner/>
            <section className="blog-section section-spacing">
                <div className="container-fluid blog-page position-relative">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-12">
                                <div className="section-heading text-center">
                                    <h2 className="title">Explore Latest Insights</h2>
                                    <p>
                                        Discover cutting-edge insights in our handpicked collection, which includes the most recent trends and tactics for successfully navigating the digital landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-around">
                            <div className="col-lg-5">
                                <div className="blog_img">
                                    <img src="images/blog-img.jpg" className="img-fluid" alt="blog-img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog_contnt">
                                    <div className="sub-name d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-external-link-alt" />
                                            <span className="ms-2">Industry</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="far fa-calendar" />
                                            <span className="ms-2">June 27, 2024</span>
                                        </div>
                                    </div>
                                    <div className="heading text-white mb-2">
                                        Unlocking Digital Success with Revealed Strategies
                                    </div>
                                    <div className="cnts pb-5">
                                        Unveil digital success secrets, equip with tools, empower online growth and mastery.
                                    </div>
                                    <a href="javascript:;" className="themebtn">Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="article-section section-spacing">
                <div className="container-fluid article-page position-relative">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-12">
                                <div className="section-heading text-center mb-0">
                                    <h2 className="title">Latest articles</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-md-8 col-12">
                                {/* Nav pills */}
                                <ul className="nav nav-pills d-flex justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="pill" href="#home">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="pill" href="#menu1">Industry</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="pill" href="#menu2">Educational</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="pill" href="#menu3">Agency</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12">
                                {/* Tab panes */}
                                <div className="tab-content mt-5 pt-4">
                                    <div id="home" className="container tab-pane active">
                                        <div className="row">
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_1.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Agency</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 19, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Cutting-Edge Strategies for Growth
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_2.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Educational</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Expert Tips for Digital Success
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_3.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Agency</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Latest Trends in Online Marketing
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-lg-0 mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_4.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Agency</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Crafting Compelling Content: Pro Tips
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-lg-0 mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_5.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Educational</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Mastering SEO: Key Frame Techniques
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_6.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Industry</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Navigating Social Media Dynamics
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu1" className="container tab-pane fade">
                                        <div className="row">
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_6.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Industry</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Navigating Social Media Dynamics
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu2" className="container tab-pane fade">
                                        <div className="row">
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-lg-0 mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_2.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Educational</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Expert Tips for Digital Success
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_5.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Educational</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Mastering SEO: Key Frame Techniques
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu3" className="container tab-pane fade">
                                        <div className="row">
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-lg-0 mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_1.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Agency</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 19, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Cutting-Edge Strategies for Growth
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-lg-0 mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_3.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Agency</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Latest Trends in Online Marketing
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 col-12 blog_card mb-lg-0 mb-4">
                                                <div className="observation-section h-100">
                                                    <div className="row">
                                                        <div className="col-12 observation-learning">
                                                            <div className="observation-img">
                                                                <img src="images/blog_4.jpg" className="img-fluid w-100" alt="blog_1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 fun-driving pt-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="sub-name d-flex align-items-center mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="fas fa-external-link-alt" />
                                                                            <span className="ms-2">Agency</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="far fa-calendar" />
                                                                            <span className="ms-2">June 27, 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="linelimit text-white position-relative">
                                                                        Crafting Compelling Content: Pro Tips
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-4 read-more">
                                                                    <a href="blog-details.php"><span>Read more</span><i className="fas fa-arrow-right ps-2" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
