import React,{useState} from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleAbout=()=>{
    navigate("/aboutus")
  }
  const handleHome=()=>{
    navigate("/")
  }
  const handleService=()=>{
    navigate("/services")
  }
  const handleGallery=()=>{
    navigate("/portfolio")
  }
  const handleCareer=()=>{
    navigate("/career")
  }
  const handleContact=()=>{
    navigate("/contactus")
  }


  return (
    <div>
      <div className="logo">
        <img src="/Images/logo.png" alt="Logo" className="logo-image" />
      </div>
      <nav className="navbar">
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleService}>Services</li>
          <li onClick={handleGallery}>Portfolio</li>
          <li onClick={handleCareer}>Career</li>
          <li onClick={handleContact}>Contact Us</li>
        </ul>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
