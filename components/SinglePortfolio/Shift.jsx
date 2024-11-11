import Link from "next/link";

export default function Shift() {
    return (
        <section className="shift-section section-spacing ">
            <div className="container-fluid h-100 position-relative digi-shift">
                <div className="container">
                    <div className="row mx-lg-5 ports align-items-center justify-content-center">
                        <div className="col-xl-5 col-md-8 text-center">
                            <div className="heading text-white mb-4 ">
                                Are you geared up for the digital shift?
                            </div>
                            <Link href="/" className="themebtn">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
