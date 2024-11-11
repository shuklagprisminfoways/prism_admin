
import SingleService from './SingleService'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <div className="container-fluid h-100 position-relative breadcrumb-sec">
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-10">
                                <div className="breadcrumb-content text-center">
                                    <h2 className="heading text-white mb-4">
                                        Expert IT Consulting for Strategic Growth
                                    </h2>
                                    <nav aria-label="breadcrumb " className="mb-4">
                                        <ol className="breadcrumb align-items-center justify-content-center mb-0">
                                            <li className="breadcrumb-item ">
                                                <Link href="/" className="text-white">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item ">
                                                <a href="javascript:;" className="text-white">
                                                    Service
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                {" "}
                                                Expert IT Consulting for Strategic Growth
                                            </li>
                                        </ol>
                                    </nav>
                                    <div className="about-content">
                                        Leverage our IT expertise to align technology with your business
                                        objectives and drive sustainable growth.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SingleService/>
        </>
    )
}

export default Banner