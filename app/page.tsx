import React from "react";
import HomeMainComponent from "../components/Home";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/owl.carousel.min.css";

export default function Home() {
  return (
    <>
      <HomeMainComponent />
    </>
  );
}

//meta tags 
// export const getServerSideProps = async () => {
//   return {
//     props: {
//       title: "Home",
//       description: "Home page description",
//     },
//   };
// };
