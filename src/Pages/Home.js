import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import InfoSection2 from '../components/InfoSection/InfoSection2';
import InfoSection3 from '../components/InfoSection/InfoSection3';
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBarMenu/SideBar'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Service from '../components/Services/Service';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} /> 
            <SideBar isOpen={isOpen} toggle={toggle} /> 
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection2 {...homeObjTwo} />
            <Service />
            <InfoSection3 {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
