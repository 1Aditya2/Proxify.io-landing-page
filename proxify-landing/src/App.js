import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SecurityCompliance from './components/sections/SecurityCompliance';
import TheProxifyWay from './components/sections/TheProxifyWay';
import DedicatedTeam from './components/sections/DedicatedTeam';
import HowItWorks from './components/sections/HowItWorks';
import RemoteTechHiring from './components/sections/RemoteTechHiring';
import TrustedExperts from './components/sections/TrustedExperts';
import BuildersPodcast from './components/sections/BuildersPodcast';
import BlackboxEra from './components/sections/BlackboxEra';
import FAQ from './components/sections/FAQ';
import BuildDream from './components/sections/BuildDream';
import Footer from './components/layout/Footer';
import CompaniesTrust from './components/sections/CompaniesTrust';
import TrustedByBest from './components/sections/TrustedByBest';
import FloatingBar from './components/layout/FloatingBar';

function App() {
  return (
    <div className='w-full'>
      <Navbar/>
      <Hero/>
      <SecurityCompliance/>
      <TheProxifyWay/>
      <HowItWorks/>
      <DedicatedTeam/>
      <RemoteTechHiring/>
      <TrustedExperts/>
      <TrustedByBest/>
      <CompaniesTrust/>
      <BuildersPodcast/>
      <BlackboxEra/>
      <FAQ/>
      <BuildDream/>
      <Footer/>
      <FloatingBar/>
    </div>  
  );
}

export default App;
