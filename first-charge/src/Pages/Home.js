import React, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import "../Style/Home.css";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Mission = lazy(() => import("../Components/Mission"));
const Services = lazy(() => import("../Components/Services"));
const Charge = lazy(() => import("../Components/Charge"));

const Home = () => {
  const initialText = "Ready For Tomorrow ";
  const [scrollingText, setScrollingText] = useState(initialText);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollingText((prevText) => {
        const newText = prevText.substring(1) + prevText[0];
        return newText;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div>
        <div className=" hero">
          <Navbar />
          <div className="hero-main ">
            <div className="hero-deatil ">
              <div className="hero-left ">
                <hr />
                <h3>Your EV Charging Partner,</h3>

                <h4 className="py-2">Everywhere You Imagine.</h4>

                <a href="">Become a partner</a>
              </div>
              <div className="hero-right flex">
                <h5>SCROLL TO EXPLORE </h5>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="randring  sliding-container">
          <div className="marquee">
            <h1
              id="sliding-text"
              className="font-poppins text-7xl font-black uppercase text-green1"
            >
              {scrollingText}
            </h1>
          </div>
        </div>

      <Mission/>
      <Services/>
      <Charge/>



      </div>
    </Suspense>
  );
};

export default Home;
