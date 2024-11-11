import Link from "next/link";

export default function Banner() {
    return (
        <section className="banner-section">
            <div className="container-fluid h-100 position-relative breadcrumb-sec">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="breadcrumb-content text-center">
                                <h2 className="heading text-white mb-4">Your Journey Starts Here</h2>
                                <nav aria-label="breadcrumb " className="mb-4">
                                    <ol className="breadcrumb align-items-center justify-content-center mb-0">
                                        <li className="breadcrumb-item "><Link href="Index.html" className="text-white">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page"> Career</li>
                                    </ol>
                                </nav>
                                <div className="about-content">
                                    Join Our Team and Shape Your Future with Prism Infoways</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
