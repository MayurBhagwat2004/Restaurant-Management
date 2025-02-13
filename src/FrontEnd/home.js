import React, { use, useEffect, useState } from 'react';
import '../Css/home.css';
import { useNavigate,Link, useLocation } from 'react-router-dom';



export const NavBar = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [loginButtonStatus,setLoginButtonStatus] = useState("Login")
  const location = useLocation()
  const currentPage = location.pathname

  const changeLoginStatus = () => {
    localStorage.setItem("isLoggedIn",false)
    
  }

  useEffect(()=>{
    const loginStatus = localStorage.getItem("isLoggedIn") === 'true'
    setIsLoggedIn(loginStatus)
    if(loginStatus){
      setLoginButtonStatus("Logout")
    }
    else{
      setLoginButtonStatus("Login")
    }
    
  })


  return (
    <div className="topnav">
      <Link to="/"><p>Home</p></Link>
      <Link to='/menu'><p>Menu</p></Link>
      <Link to='/about'><p>About</p></Link>
      <Link to='/reservations'><p>Reservations</p></Link>
      { currentPage!=="/login" ? (<Link to="/login"><button className="login-button" onClick={()=>{changeLoginStatus()}}>{!isLoggedIn ? (<p>{loginButtonStatus}</p>): (<p>{loginButtonStatus}</p>)}</button></Link>):(<p></p>)}
      
    </div>
  );
};

export const ReservationBlock = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reserve');
  }
  
  return (
    <>
    <div className="reservation-block">
      <div className="reservation-gallery">
        <div className="reservation-button">
          <button className="reserve-button" onClick={handleReservationClick}>Reserve</button>
        </div>
      </div>
    </div>
    <MenuTable />
    </>

  );
};

export const MenuTable = () => {
  const menuItems = [
    { name: 'Margherita Pizza', category: 'Pizza', price: '$8.99' },
    { name: 'Caesar Salad', category: 'Salad', price: '$5.99' },
    { name: 'Spaghetti Carbonara', category: 'Pasta', price: '$12.99' },
    { name: 'Grilled Chicken', category: 'Main Course', price: '$14.99' },
    { name: 'Chocolate Lava Cake', category: 'Dessert', price: '$6.99' },
  ];

  return (
    <>
    <NavBar></NavBar>
    <div className='menu-block'>
      <h2>Menu Items</h2>
      <table className='menu-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};




export const StaffCard = ({ onStaffClick }) => {
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
          onClick={() => onStaffClick(item)} 
        />
      ))}
    </div>
  );
};

const StaffInfo = ({ selectedStaff }) => {
  if (!selectedStaff) {
    return (
      <div className='staff-info-container'>
        <p className='description'>Select a staff member for more info</p>
      </div>
    );
  }

  return (
    <div className='staff-info-container' >
      <div className='staff-info'>
        <h2 className='chef-name'>{selectedStaff.title}</h2>
        <p className='description'>{selectedStaff.description}</p>
      </div>
    </div>
  );
};

export const StaffSection = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);


  return (
    <>
    <div>
      <StaffCard onStaffClick={setSelectedStaff} />
      <StaffInfo selectedStaff={selectedStaff} />
    </div>
    <Footer />

    </>
  );
};


export const Footer = () =>{
    return(
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <h4>restaurant’s name</h4>
                    <p>&copy; 2025 All rights reserved.</p>
                </div>

                <div className='footer-middle'>
                    <ul>
                        <li>
                          <div className='footer-middle-elements-div'>
                            <div><p><Link to="/">Home</Link></p></div>
                            <div><p><Link to='/menu'>Menu</Link></p></div>
                            <div><p><Link to='/about'>About</Link></p></div>
                            <div><p><Link to='/reservations'>Reservations</Link></p></div>
                          </div>
                        </li>
                    </ul>
                </div>

                <div className='footer-right'>
                    <ul>
                        <li>
                            <a href="https://facebook.com" target='_blank' rel='noopener noreferrer'>FaceBook</a>
                            <a href="https://instagram.com" target='_blank' rel='noopener noreferrer'>Instagram</a>
                            <a href="https://x.com" target='_blank' rel='noopener noreferrer'>X</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </footer>
    )
}

