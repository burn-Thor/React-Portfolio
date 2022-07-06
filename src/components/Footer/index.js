import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>

                    <FooterLinksItems>
                    <FooterLinkTitle>About US</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Testimonials'>Testimonials</FooterLink>
                            <FooterLink to='/Careers'>Careers</FooterLink>
                            <FooterLink to='/Investors'>Investors</FooterLink>
                            <FooterLink to='/Terms and Conditions'>About</FooterLink>

                        
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Testimonials'>Testimonials</FooterLink>
                            <FooterLink to='/Careers'>Careers</FooterLink>
                            <FooterLink to='/Investors'>Investors</FooterLink>
                            <FooterLink to='/Terms and Conditions'>About</FooterLink>

                        
                    </FooterLinksItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    
                    <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Testimonials'>Testimonials</FooterLink>
                            <FooterLink to='/Careers'>Careers</FooterLink>
                            <FooterLink to='/Investors'>Investors</FooterLink>
                            <FooterLink to='/Terms and Conditions'>About</FooterLink>

                        
                    </FooterLinksItems>


                

                </FooterLinksWrapper>

            </FooterLinksContainer>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer