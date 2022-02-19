import React from 'react'
import {Button} from '../ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,TextWrapper,Column1,Column2,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img } from './InfoElements'
import bank from '../../images/bank.svg'


const InfoSection2 = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,alt,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' 
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={bank} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>    
                </InfoWrapper>    
            </InfoContainer>
        </>
    )
}

export default InfoSection2
