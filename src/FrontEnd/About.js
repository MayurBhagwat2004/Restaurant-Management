import React from 'react';
import '../Css/About.css';
import { NavBar,Footer } from './home';
export const About = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Experience the Taste of Tradition and Innovation.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for exceptional food and unforgettable dining experiences, our restaurant has been serving customers with love and dedication for years. We blend tradition with innovation to create a menu that delights every palate.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing a warm and welcoming atmosphere where families and friends can come together over delicious meals made from the freshest ingredients. Our mission is to be the heart of our community's culinary journey.
          </p>
        </section>

        <section className="about-section">
          <h2>Meet the Team</h2>
          <p>
            Led by our talented Head Chef Emily Clarke and a passionate team of culinary experts, we take pride in crafting dishes that are as beautiful as they are delicious. Our staff is committed to delivering exceptional service to make every visit memorable.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Fresh, locally sourced ingredients.</li>
            <li>Authentic and creative dishes crafted with care.</li>
            <li>A welcoming atmosphere for all occasions.</li>
            <li>Dedicated and passionate chefs who love what they do.</li>
          </ul>
        </section>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default About;
