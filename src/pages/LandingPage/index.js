import Header from "../../components/Header";
import Paralax from "../../components/Paralax";
import Footer from "../../components/Footer";
import React, { Suspense } from "react";

const Music = React.lazy(() => import('../../components/Music'))

const LandingPage = () => {
  return (
    <>
      <Header />
      <Paralax />
      <Suspense fallback={<div>Loading...</div>}>
        <Music />
      </Suspense>
      <Footer />
    </>
  );
};

export default LandingPage;
