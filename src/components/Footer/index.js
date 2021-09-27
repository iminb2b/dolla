import React from 'react'
import { FooterContainer, Footerlink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <Footerlink to="/signin">How it works</Footerlink>
                            <Footerlink to="/signin">Testimonials</Footerlink>
                            <Footerlink to="/signin">Careers</Footerlink>
                            <Footerlink to="/signin">Investors</Footerlink>
                            <Footerlink to="/signin">Term of Services</Footerlink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <Footerlink to="/signin">Submit Video</Footerlink>
                            <Footerlink to="/signin">Ambassadors</Footerlink>
                            <Footerlink to="/signin">Agency</Footerlink>
                            <Footerlink to="/signin">Influencer</Footerlink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <Footerlink to="/signin">Contact</Footerlink>
                            <Footerlink to="/signin">Support</Footerlink>
                            <Footerlink to="/signin">Destinations</Footerlink>
                            <Footerlink to="/signin">Sponsorships</Footerlink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <Footerlink to="/signin">Instagram</Footerlink>
                            <Footerlink to="/signin">Facebook</Footerlink>
                            <Footerlink to="/signin">Youtube</Footerlink>
                            <Footerlink to="/signin">Twitter</Footerlink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()}
                            All rights reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
