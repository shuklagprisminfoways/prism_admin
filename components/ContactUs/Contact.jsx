import Banner from "./Banner";

export default function Contact() {
    return (
        <>
            <Banner />

            <section className="contactus-section section-spacing">
                <div className="container-fluid h-100 position-relative contact-form">
                    <div className="circles" />
                    <div className="container">
                        <div className="row form-content align-items-center justify-content-between">
                            <div className="col-xl-6 col-md-6">
                                <div className="contnt">
                                    <h2 className="contact-title mb-2">We had Love ToHear From You.</h2>
                                    <div className="cotnt pb-4">
                                        While smoke signals are fun, there are much quicker ways to reach us. Let’s get in touch today!
                                    </div>
                                    <div className="contact-group">
                                        <div className="contact-item d-flex align-items-center mt-4">
                                            <div className="icon">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                            </div>
                                            <div className="info">
                                                <div className="sub-title mb-2">Office</div>
                                                <a href="tel:+91 9813273380" className="contact">Plot No.-CP9, Sector 8, IMT Manesar, Gurugram, Haryana 122051</a>
                                            </div>
                                        </div>
                                        <div className="contact-item d-flex align-items-center mt-4">
                                            <div className="icon">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                            </div>
                                            <div className="info">
                                                <div className="sub-title mb-2">Mail us</div>
                                                <a href="mailto:team@Prism Infoways.org" className="contact">info@prisminfoways.com</a>
                                            </div>
                                        </div>
                                        <div className="contact-item d-flex align-items-center mt-4">
                                            <div className="icon">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headphones" className="svg-inline--fa fa-headphones " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" /></svg>
                                            </div>
                                            <div className="info">
                                                <div className="sub-title mb-2">Call us</div>
                                                <a href="tel:+91 9813273380" className="contact">+91-9813273380</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form className="form contact-card mt-lg-0 mt-4 ms-lg-2 ms-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="username" placeholder="First Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="contact" type="tel" id="username" placeholder="contact/whatsapp number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" id="username" placeholder="Email Address" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-select" name="occupation">
                                                    <option>Occupation</option>
                                                    <option value="School Student">School Student</option>
                                                    <option value="Undergraduate Student">Undergraduate Student</option>
                                                    <option value="Postgraduate Student">Postgraduate Student</option>
                                                    <option value="Job">Job</option>
                                                    <option value="Entrepreneur">Entrepreneur</option>
                                                    <option value="Creative Professional">Creative Professional</option>
                                                    <option value="Self Employed/Freelancer">Self Employed/Freelancer</option>
                                                    <option value="Unemployed">Unemployed</option>
                                                    <option value="Engineer">Engineer</option>
                                                    <option value="Doctor">Doctor</option>
                                                    <option value="Lawyer">Lawyer</option>
                                                    <option value="Teacher">Teacher</option>
                                                    <option value="NGO/Social Worker">NGO/Social Worker</option>
                                                    <option value="CA/CS">CA/CS</option>
                                                    <option value="Housewife">Housewife</option>
                                                    <option value="Sales Professional">Sales Professional</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-select" name="interested">
                                                    <option>interested in</option>
                                                    <option value="Web Devlepment Solutions">Web Devlepment Solutions</option>
                                                    <option value="App Devlepment Solutions">App Devlepment Solutions</option>
                                                    <option value="Marketing Solutions">Marketing Solutions</option>
                                                    <option value="Graphics & Video Solutions">Graphics &amp; Video </option>
                                                    <option value="Ai Development Solution">Ai Development Solution</option>
                                                    <option value="Online Earning Solutions">Online Earning Solutions</option>
                                                    <option value="Online Business">Online Business</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" rows={5} className="form-control" placeholder="What's your Project about?" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <a href="javascript:;" type="button" className="themebtn white-hover">Submit</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}