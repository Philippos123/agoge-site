import React from 'react';
import Navbar from '../components/NavBar';
import Test from '../components/test';
import Demo from '../components/Demo';
import Demo1 from '../components/Demo1';
import Footer from '../components/Footer';
import Features from '../components/Features';
import PlanetHeader from '../components/Planet_header';
import PlanetOfData from '../components/SpaceChart';
import Offer from '../components/offers';

const Analys = () => {
  return (
    <>
    <Navbar />
    <Test />
    <Features />
    <PlanetHeader />
    <PlanetOfData />
    <Offer />
    <Demo />
    <Demo1 />
    <Footer />
    </>
  );
};

export default Analys;
