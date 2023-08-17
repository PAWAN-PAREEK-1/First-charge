import { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('../Components/Navbar'));
const Loading = lazy(() => import('../Components/Loading'));

const About = () => {
  return (
    <Suspense fallback={<div><Loading/></div>}>
    <div>


      <Navbar/>


      AboutUs</div>
      </Suspense>

  )
}

export default About