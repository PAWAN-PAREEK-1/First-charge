import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Loading = lazy(() => import('./Components/Loading'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Reviews = lazy(() => import('./Pages/Reviews'));
const Contact = lazy(() => import('./Pages/Contact'));
const Blog = lazy(() => import('./Pages/Blog'));
const Services = lazy(() => import('./Pages/Services'));
const Navbar = lazy(() => import('./Components/Navbar.js'));
// const Footer = lazy(() => import('./Components/Footer.js'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><Loading/></div>}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<Services />} />
            <Route path="/Review" element={<Reviews/>} />

            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          {/* <Footer/> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default App;
