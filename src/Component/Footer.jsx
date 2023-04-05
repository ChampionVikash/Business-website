import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from "../styles/Button"
import styled from 'styled-components';
import { FaLinkedin ,FaInstagramSquare, FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
   <Wrapper>
      <section className="contact-short">
       <div className="grid grid-two-column">
           <div>
             <h3>Ready to get started</h3>
             <h3>Talk to us today</h3>
           </div>
          
           <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink> 
           </div>
         </div>
      </section> 
      
      {/* footer section */}

      <footer>
        <div className="container grid grid-four-column tgrid">
          <div className="footer-about">
            <h3>Champion Vikash</h3>
            <p className="stext">“Take up an idea, devote yourself, struggle in patience,and the sun will rise.”</p>
          </div>

          {/* This is 2ND Column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" required autoComplete="off" placeholder="Email" />
              <input type="submit" value="Subscribe" className="sub" />
            </form>
          </div>

          {/* This is 3RD Column */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.linkedin.com/in/vikash-kumar-7495061b4/" target="_blank" >
                  <FaLinkedin className="icons" />
                </a>  
              </div>
              <div><FaInstagramSquare className="icons" /></div>
              <div>
                <a href="https://github.com/ChampionVikash" target="_blank">
                <FaGithub className="icons" />
                </a>
              </div>
              </div>
            </div>

          {/* This is 4th Column */}
          <div>
            <h3>Call Us</h3>
            <h3>+91 983******9</h3>
          </div>
        </div>
        
        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column fwidth">
            <p>
              @2023 Champion Vikash.All Rights Reserved
            </p>
            <div >
              <p className="dgrid">PRIVACY POLICY</p>
              <p className="dgrid">TERMS & CONDITIONS</p>
              </div>
          </div>
        </div>
      </footer>

   </Wrapper>
  )
}

const Wrapper = styled.section`
  .tgrid{
    width:70%; 
  }

  .sub{
    &:hover {
      transform: scale(.9) ;
      transition : all 0.2s linear;

    }
  }
  
  .fwidth{
    width: 90rem;
  }
  

  .dgrid{
   font-size:1.5rem;
  }
  .grid-two-column{
    gap:9rem;
  }
   
  .contact-short {
   max-width: 60vw;
   margin: auto;
   padding: 5rem 10rem;
   background-color: ${({ theme }) => theme.colors.bg};
   border-radius: 1rem;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
   transform: translateY(50%);
  }
 .contact-short-btn {
    justify-self :end;
    align-self: center;
 }
  
  footer{
    padding: 12rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom : 2.4rem;
    }

    p{
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons{
      display: flex;
      gap: 2rem;

      div {
        padding : 1rem;
        border-radius : 50%;
        border : 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color : ${({ theme }) => theme.colors.white};
          font-size : 2.4rem;
          position : relative;
          cursor: pointer;
        }
      }
    }


    .footer-bottom--section{
      padding-top: 9rem;

      hr{
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
     .contact-short{
       max-width: 95vw;
       padding: 2rem 0rem;
       display: flex;
       justify-content: center;
       align-items : center;

       .contact-short-btn{
          text-align : center;
          justify-self: flex-start;
       }
  }
      .footer .footer-bottom--section{
        padding-top: 3.2rem;
      }
      .grid-two-column {
        gap: 2.4rem;
        text-align:center;
    }

    .tgrid{
      text-align: center;
    }
    .footer-social{
      margin:0 19rem;
    }
    footer p{
      font-size:2rem;
    }
    .fwidth {
      width: 100%;
  }

  .tgrid{
        width:100%;
        text-align:center;
        justify-content:center;
    }
   .csection {
      // margin-bottom: -4rem;
      width: 100%;
  }
}
// @media (max-width: ${({ theme }) => theme.media.smallmobile}){
//       .tgrid{
//         width:100%;
//         text-align:center;
//         justify-content:center;
//       }
//      .fwidth {
//         width: 100%;
//     }
//     // .stext{
//     //   font-size:4rem;
//     // }
//     footer p{
//       font-size:2rem;
//     }
`;

export default Footer
