import React from "react";
import { lazy, Suspense } from "react";
import "../Style/Home.css";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));

const Home = () => {
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
          <div className="hero-main">
            <div className="hero-deatil">
              <div className="hero-left">
                <hr />
                <h3>Your EV Charging Partner,</h3>
                <h4>Everywhere You Imagine.</h4>
              </div>
              <div className="hero-right">
                <h5>SCROLL TO EXPLORE <hr/></h5>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
