import React from 'react'
import {Button} from '../ButtonElements'

import { InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        TopLine, 
        Column1, 
        TextWrapper, 
        Heading, 
        BtnWrap,
        Subtitle, 
        Column2, 
        Img, ImgWrap } from './InfoElements'



const InfoSection = ( {lightBg, lightText, headline, darkText, description, buttonLabel, img, alt, topLine, id, primary, dark, imgStart} ) => {

    console.log(img);

    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}> 
                <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText} >{headline}</Heading>
                            <Subtitle darkText={darkText} >{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection;
