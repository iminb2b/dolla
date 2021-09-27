import React, { useState } from 'react'
import { HeroBg, HeroBtnWrapper, HeroContainer, ArrowForward, ArrowRight, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import video from "../../video/video.mp4"
import { Button } from "../ButtonElements"
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and revceive $250 in credit towards your next payment</HeroP>
                <HeroBtnWrapper>
                    <Button primary dark
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        smooth
                        spy={true}
                        duration={500}
                        offset={80}>

                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
