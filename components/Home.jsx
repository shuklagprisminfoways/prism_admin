"use client"
import React from "react";
import HeroComponent from "../Pages/Hero/Hero";
import ServiceComponent from "../Pages/Service/Service"
import IndustryComponent from "../Pages/Industries/Industry"
import ChoiceComponent from "../Pages/Choice/Choice"
import TestimonialComponent from "../Pages/Testimonial/Testimonial"
import FaqComponent from "../Pages/Faq/Frequently"
import WorkFlowComponent from "../Pages/WorkFlow/WorkFlow"
import WorkShopComponent from "../Pages/WorkShop/WorkShop"
import { useRouter } from "next/navigation";


const Home = () => {

  const router = useRouter()

  return (
    <>
      <HeroComponent />
      <ServiceComponent />
      <IndustryComponent />
      <ChoiceComponent />
      <TestimonialComponent />
      <WorkFlowComponent />
      <WorkShopComponent />
      <FaqComponent />
    </>
  );
};

export default Home;
