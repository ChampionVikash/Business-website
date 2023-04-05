import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { CgMenu, CgCloseR } from "react-icons/cg";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Nav = styled.nav`
    .navbar-list{
      display:flex;
      gap: 4.8rem;
 
    li{
      list-style:none;
     
    }  
    .size{
      font-size: 1.5rem;

    }
    .navbar-link{
      text-decoration :none;
      &:link,
      &:visted {
        display: inline-block;
        text-decoration:none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition : color 0.3 linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper}
      }
      }
    }
  }
    
  .mobile-navbar-btn{
    display: none;
  
    .close-outline {
      display: none;
    }
  }

  .mobile-navbar-btn {
    display : none;

    .close-outline{
      display: none;
    }
  }

  .mobile-navbar-btn[name="close-outline"]{
     display: none;
    }

   @media (max-width: ${({ theme }) => theme.media.tab}) {
      .mobile-navbar-btn{
        display: inline-block;
        z-index : 999;
        border: ${({ theme }) => theme.colors.black};
        

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      // hide the original nav menu
      .navbar-list {
        width: 100vw;
        height : 100vh;
        position : absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction : column;
  
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
   
      .size{
        font-size: 3.6rem;
      }
    }
       .active .mobile-nav-icon {
        display: none;
        font-size: 3.6rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
       }

        .active .close-outline{
         display: inline-block;
         position:fixed;
      
    }
        .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        position: fixed;
        

       }
   }
  
  `;

 return (  
 <Nav>
     <div className={openMenu ? "menuIcon active" : "menuIcon"}>
   <ul className="navbar-list">
    <li>
           <NavLink className="navbar-link size" onClick={() => setOpenMenu(false)} to="/">
             Home
           </NavLink>
    </li>
    <li>
           <NavLink className="navbar-link size" onClick={() => setOpenMenu(false)} to="/about">
             About
           </NavLink>
    </li>
    <li>
           <NavLink className="navbar-link size" onClick={() => setOpenMenu(false)} to="/services ">
             Services
           </NavLink>
    </li>
    <li>
           <NavLink className="navbar-link size" onClick={() => setOpenMenu(false)} to="/contact">
             Contact
           </NavLink>
    </li>     
    </ul>
       
       {/* nav icon */} 
      <div className="mobile-navbar-btn" >
         <CgMenu name="menu-outline" className="mobile-nav-icon"
           onClick={() => setOpenMenu(true)}
         />
         <CgCloseR name="close-outline" className="close-outline mobile-nav-icon fscroll"
           onClick={() => setOpenMenu(false)}
          />
      </div>
   </div>
 </Nav>
  )
}

export default Navbar
