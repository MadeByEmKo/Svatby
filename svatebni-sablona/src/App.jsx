import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Information from './components/Information';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import Messages from './components/Messages';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full relative">
        <Navbar />

        <main className="flex-grow pt-16">
          <section id="home"><Hero /></section>
          <section id="story"><Story /></section>
          <section id="info"><Information /></section>
          <section id="gallery"><Gallery /></section>
          <div className="bg-primary-50">
            <section id="rsvp" className="py-12"><RSVP /></section>
            <section id="gifts" className="py-12"><Gifts /></section>
          </div>
          <section id="messages"><Messages /></section>
          <section id="faq"><FAQ /></section>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
