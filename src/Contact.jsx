import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    
    
    .container{
      margin-top:6rem;
      text-align:center;
       
      .contact-form{
        width: 50rem;
        margin: auto;

      .contact-inputs{
        display:flex;
        flex-direction : column;
        gap : 3rem;

        input[type="submit"]{
          cursor: pointer;
          transition : all 0.2s;

        &:hover {
          border: 1px solid ${({theme}) => theme.colors.btn};
          transform: scale(0.9);
        }
        }
      }
     }
    }
    
    .hdata{
      margin-top:-6rem;
    }
    
  @media (max-width: ${({ theme }) => theme.media.tab}){
      .bbtn{
          margin:0rem 16rem;
      }

      .container{
        margin-bottom:-4rem;
      }
  }
  @media (max-width: ${({ theme }) => theme.media.smallmobile}) {
    .bbtn{
    margin:0rem 4rem;
    justify-content:center;
    text-align:center;
    // margin-left:6rem;
    }
   input,textarea{
    width:83%;
    margin-left:-9.2rem;
   }
   
  }

  `;

  return (
    <Wrapper>
      <h2 className="common-heading hdata">Feel Free To Contact Us</h2>
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.2505948246!2d75.50337868020956!3d31.32252538676145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1680506037958!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container csection">
        <div className="contact-form sform">
          <form action="https://formspree.io/f/mrgvyoja" method="POST" className="contact-inputs">
            <input type="text" name="username" placeholder="username"
              autoComplete="off" required />
            
            <input type="email" name="Email" placeholder="Email"
              autoComplete="off" required />
            
            <textarea name="message" cols="30" rows="6" placeholder="Message"  autoComplete="off" required></textarea>
            
            <input type="submit" value="send"  className="bbtn"/>
           
          </form>
         </div> 
      </div>
    
    </Wrapper>
  ) 
}

export default Contact
