import React, {useState} from 'react'
import { HeroContainer,VideoBg,HeroBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg loop muted autoPlay src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new accoun today and receive $250 in credit
                    towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true' 
                    big='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
