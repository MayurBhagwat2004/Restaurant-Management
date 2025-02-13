import React from 'react';
import '../Css/About.css';
import { NavBar,Footer } from './home';
export const About = () => {
 const StaffCard = () => {
  const members = [
    { title: "Commis Chef", description: "John is an enthusiastic and dedicated Commis Chef with a passion for learning and improving in the kitchen. With a strong foundation in basic cooking techniques and food preparation, he works tirelessly to support the kitchen team and ensure the smooth running of daily operations. John is skilled in chopping, prepping, and assembling dishes, all while maintaining a focus on food safety and cleanliness. Eager to develop his skills further, he is always ready to assist senior chefs and take on new challenges. His attention to detail and commitment to quality make him a valuable asset in creating exceptional dining experiences for guests..", img: "/Images/chef1.jpg" },
    { title: "Pantry Chef", description: "John Smith is a skilled Pantry Chef with a deep passion for preparing fresh, high-quality ingredients. With expertise in managing the cold station, he ensures that salads, appetizers, and cold dishes are prepared with precision and creativity. His attention to detail, along with a strong knowledge of food safety practices, ensures every dish meets the restaurant’s standards. John’s ability to work efficiently in a fast-paced kitchen environment makes him a crucial part of the culinary team, contributing to the smooth operation of the kitchen", img: "/Images/chef2.png" },
    { title: "Head Chef", description: "Emily Clarke is a highly skilled and passionate Head Chef with over 10 years of experience in the culinary industry. Her expertise spans across all areas of fine dining, from crafting innovative menu concepts to managing a team of chefs in a high-paced kitchen. Emily excels in French and Italian cuisine but is always keen to experiment with new flavors. Her leadership and attention to detail ensure that every dish is prepared to perfection. Emily is known for her calm demeanor, creative vision, and unwavering commitment to quality, making her the cornerstone of the restaurant’s kitchen..", img: "/Images/chef3.jpg" },
    { title: "Sous Chef", description: "Emily is a passionate and highly skilled Sous Chef with over 8 years of experience in high-end kitchens. Her expertise lies in managing kitchen operations efficiently, ensuring every dish is prepared to perfection, and leading a team with precision and care. She has an eye for detail, from plating to the balance of flavors. Emily works closely with the Head Chef to design new menus, manage food inventories, and oversee kitchen staff to maintain quality standards. Her calm and methodical approach ensures that the kitchen runs smoothly under pressure, and she thrives in fast-paced environments.", img: "/Images/chef4.jpg" }
  ];

  return (
    <div className="staff-member-card-container">
      <div className="staff-title">
        <h2>Our Staff</h2>
      </div>
      {members.map((item, index) => (
        <div
          className="staff-member-card"
          key={index}
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            width: '600px'
          }}
          
        />
      ))}
    </div>
  );
};
  
  return (
    <>
    <NavBar></NavBar>
    <div className="about-page">
      <div className="about-hero">
        <div className='about-hero-heading'>
          <h1>About Us</h1>
        </div>
        <div className='about-hero-desc'>
          <p>Experience the Taste of Tradition and Innovation.</p>
        </div>
        <div className='about-hero-img'>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
        
          <div className='about-content-heading'>
            <h2>Our Story</h2>
          </div>
          <div className='about-content-desc'>
            <div className='about-content-img'>

            </div>
            <p>
              Founded with a passion for exceptional food and unforgettable dining experiences, our restaurant has been serving customers with love and dedication for years. We blend tradition with innovation to create a menu that delights every palate.
            </p>
          </div>

        </section>

        <section className="about-section">
          <div className='about-section-h1'>
            <h2>Our Mission</h2>
          </div>
          <div className='about-section-img'>

          </div>
          <div className='about-section-desc'>
            <p>
              We are dedicated to providing a warm and welcoming atmosphere where families and friends can come together over delicious meals made from the freshest ingredients. Our mission is to be the heart of our community's culinary journey.
            </p>
          </div>

        </section>

        <section className="about-section">
          <h2>Meet the Team</h2>
            <StaffCard/>

          <p>
            Led by our talented Head Chef Emily Clarke and a passionate team of culinary experts, we take pride in crafting dishes that are as beautiful as they are delicious. Our staff is committed to delivering exceptional service to make every visit memorable.
          </p>
        </section>

        <section className="about-section">
          <div className='about-section-h1'>
            <h2>Why Choose Us?</h2>
          </div>
          <div className='about-section-list'>
            <ul>
              <li>Fresh, locally sourced ingredients.</li>
              <li>Authentic and creative dishes crafted with care.</li>
              <li>A welcoming atmosphere for all occasions.</li>
              <li>Dedicated and passionate chefs who love what they do.</li>
            </ul>

          </div>
          
        </section>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default About;
