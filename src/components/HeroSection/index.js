import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements'


const HeroSection = () => {
    
    const [hover, setHover] = useState(false)
    
    const onHover = ()=>{
        setHover(!hover);
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account todat and recive $250 in credits towards your next payment</HeroP>


                <HeroBtnWrapper>
                    <Button primary="true"
                            dark="true"
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover} 
                            to="signup">Get starded { hover ? <ArrowFoward/> : <ArrowRight/> } </Button>
            </HeroBtnWrapper>

            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
