import React from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"
import { Button } from "../styles/Button";
import {useGlobalContext} from "../context"

const HeroSection = () => {
  const {name,image} = useGlobalContext()

 return (   
 <Wrapper>
  <div className="container grid grid-two-column sizecontainer">
    <div className="section-hero-data">
      <p className="hero-top-data">THIS IS ME</p>
      <h1 className="hero-heading">{name}</h1>
      <p className="hero-para sizepara">I'm {name}. A Full stack Developer.I have very wide ranges of skills and I have mastery over MERN stack Development.</p>
      <Button className="btn heireme-btn">
        <NavLink to="/contact">HIRE ME</NavLink> 
      </Button>
    </div>
    
    <div className="section-hero-image pic">
         <picture>
           <img src={image}  alt="hero-img" className="hero-img" />
         </picture> 
    </div>
  </div>
  </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  
  .section-hero-data{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
   
  .btn{
     max-width:16rem;
  }
  
   .hero-top-data{
    text-transform: uppercase;
    font-weight : 500;
    font-size : 1.5rem;
    color: ${({theme}) => theme.colors.helper};
   }

   .hero-heading{
    text-transform: uppercase;
    font-size: 6rem;
   }
   
   .hero-para{
    margin-top:1.5rem;
    margin-bottom : 3.4rem;
    max-width: 60rem;
   }

   .section-hero-image {
    display: flex;
    justify-content :center;
    align-items : center;
   }

   picture {
    text-align : center;
   }

   .hero-img{
    width: 130%;
   }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }

    .hero-img{
      width: 100%;
     }

     .section-hero-data{
      justify-content:center;
      text-align: center;
     }

     .heireme-btn{
         margin:0rem 24rem;  
     }
  }
  
  @media (max-width: ${({ theme }) => theme.media.small_mobile}) {
    .hero-img{
      width: 100%;
      padding:0;
     }
     .section-hero-data{
      justify-content:center;
      text-align: center;
      word-wrap: break-word;
     }

     .sizecontainer{
       width:100%;
       padding:0 2rem 0 2rem;
     }

     .sizepara{
       text-align:center;
       justify-content:center;
       font-size:2rem;
       word-wrap: break-word;
    
     }
  }
 
  @media (max-width: ${({ theme }) => theme.media.smallmobile}) {
     .section-hero-data{
      justify-content:center;
      text-align: center;
     }

     .heireme-btn{
         margin:0rem 12rem;  
     }

    } 

  

`;

export default HeroSection

