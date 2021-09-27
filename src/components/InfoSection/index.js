import React from 'react'
import { Button } from "../ButtonElements"
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, Infowrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({ id, lightBg, imgStart, topLine, lightText, primary, dark, dark2, headline, buttonLabel, darkText, description, img, alt }) => {
    console.log(img)
    return (
        <InfoContainer id={id} lightBg={lightBg}>
            <Infowrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>{buttonLabel}</Button>
                            </BtnWrap>

                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </Infowrapper>
        </InfoContainer>
    )
}

export default InfoSection

