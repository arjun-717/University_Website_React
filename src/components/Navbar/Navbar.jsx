
import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../assets/images/logo.png'
import { Link } from "react-scroll";
import menu from '../../assets/images/menu-icon.png'
const Navbar =()=>{

    const [Sticky,setSticky] = useState(false);

    useEffect(()=>{
        const handleScroll =()=>{
        if (window.scrollY > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
        }
       window.addEventListener('scroll',handleScroll)
    },[])

    const [Menu,setMenu] = useState(false);

    const HandleMenu =()=>{
      Menu ? setMenu(false) : setMenu(true)
    }
    

    return <nav className={`container ${Sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className="logo"/>
        <img src={menu} alt=""  className="menu"  onClick={HandleMenu} />
        <ul className={Menu?'':'hide-menu'} >
        
            <li><Link to="hero" smooth={true} offset={0} duration={500} >Home</Link> </li>
            <li><Link to="programs" smooth={true} offset={-280} duration={500} >Program</Link></li>
            <li><Link to="about" smooth={true} offset={-130} duration={500} >About us</Link> </li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500} >Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-280} duration={500} className="btn">Contact us</Link></li>
        </ul>
       
    </nav>
}

export default Navbar;