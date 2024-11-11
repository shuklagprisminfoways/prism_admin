"use client"
import Banner from "./Banner";
import { useParams } from 'next/navigation';

export default function SinglePortofolio() {

    const { slug } = useParams(); 

    const imageMap = {
        "the-rise-of-design": "service_card_1.webp",
        "the-rise-of-design": "service_card_2.webp",
        "the-rise-of-design": "service_card_3.webp",
        "the-rise-of-design": "service_card_4.webp",
      }


      const imagePath = `../../images/${imageMap[slug] || "default_image.webp"}`;

    return (
        <>
        <Banner/>
        <section className="single-portfolio-section section-spacing">
            <div className="container-fluid h-100 position-relative single-page">
                <div className="container">
                    <div className="row portfolio-content justify-content-center">
                        <div className="col-xl-11 col-12">
                            <div className="portfolio-cnts">
                                <h1 className="mb-5 text-white text-center">The rise of design</h1>
                                <div className="w-100">
                                    <img src={imagePath} className="img-fluid w-100 rounded-5"  alt={`service_card_${slug}`} />
                                </div>
                                <div className="portfolio_description pt-lg-5 px-lg-5 p-4 pb-0">
                                    <div className="contnt mb-3">
                                        With the ongoing development of digital marketing technologies, using customized content has become the fundamental element of successful campaigns. This project seeks to learn more about the transformative impact of tailored content strategies for brands, providing actionable insights and novel techniques to increase engagement and revenue from conversions.
                                    </div>
                                    <h2 className="my-4 text-white">
                                        Personalized Content Mastery
                                    </h2>
                                    <div className="contnt mb-3">
                                        Understanding its essence reveals its critical function in engaging audiences effectively. Psychological insights reveal how personalized experiences influence customer choices. Personalization develops connection, increases engagement, and promotes brand loyalty.
                                    </div>
                                    <ul>
                                        <li>
                                            Customized content improves brand-consumer relationships.
                                        </li>
                                        <li>
                                            Personalization increases conversion rates and revenues.
                                        </li>
                                        <li>
                                            Tailored experiences increase long-term brand loyalty.
                                        </li>
                                    </ul>
                                    <h2 className="my-4 text-white">
                                        Implementing Dynamic Strategies
                                    </h2>
                                    <div className="contnt mb-3">
                                        Examine the impact of tailored content on various digital platforms, including social media, email marketing, websites, and mobile apps. Provide practical advice on how to tailor content for various platforms and audience segments.
                                    </div>
                                    <div className="w-100">
                                        <img src="/images/single_portfolio.jpg" className="img-fluid w-100 rounded-5" alt="single_portfolio" />
                                    </div>
                                    <h2 className="my-4 text-white">
                                        Measuring Success
                                    </h2>
                                    <div className="contnt mb-3">
                                        We are derived significant conclusions from knowledgeable data analysis, promoting constant improvements and optimized operations. Iterative approaches based on these insights provide for an extended period of relevance and the greatest impact.
                                    </div>
                                    <ul>
                                        <li>
                                            Determine KPIs to assess campaign efficacy.
                                        </li>
                                        <li>
                                            Analyze data to make strategic modifications.
                                        </li>
                                        <li>
                                            Continuous optimization is essential for long-term advertising success.
                                        </li>
                                    </ul>
                                    <h2 className="my-4 text-white">
                                        Conclusion
                                    </h2>
                                    <div className="contnt mb-3">
                                        The mission of this project provide digital marketing agencies with the fundamental understanding and practical help responsible for compelling personalized content campaigns for their clients, opening up additional opportunities for success in the digital sphere.
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
