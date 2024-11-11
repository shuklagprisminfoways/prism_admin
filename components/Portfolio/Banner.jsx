import Link from "next/link";
import Shift from "./Shift";

export default function Banner() {
    return (
        <>
            <section className="banner-section">
                <div className="container-fluid h-100 position-relative breadcrumb-sec">
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-10">
                                <div className="breadcrumb-content text-center">
                                    <h2 className="heading text-white mb-4">Portfolios</h2>
                                    <nav aria-label="breadcrumb " className="mb-4">
                                        <ol className="breadcrumb align-items-center justify-content-center mb-0">
                                            <li className="breadcrumb-item "><Link href="/" className="text-white">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                                        </ol>
                                    </nav>
                                    <div className="about-content">
                                        Discover how we’ve helped businesses thrive with innovative IT solutions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Shift/>
        </>
    )
}