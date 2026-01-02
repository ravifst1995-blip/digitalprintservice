import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Certificates from '../components/home/Certificates';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certificates />
      <Stats />
      <Services />
    </>
  );
}