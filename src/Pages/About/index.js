import React, {useState, useEffect} from 'react'

import AboutContainer from '../../Components/AboutPage/AboutContainer'
import AboutHeader from '../../Components/AboutPage/AboutHeader';
import PortfolioContainer from '../../Components/PortfolioPage/PortfolioContainer'
import Contact from '../../Components/AboutPage/Contact'

import BackgroundImgAbout from '../../img/fintan.jpg'
import BackgroundImgPortfolio from '../../img/background-white.jpg'

import { Tabs, Card, Typography } from 'antd';


import {useSpring, useTransition, animated} from 'react-spring'

function AboutPage() {
    const [mountHeader, setMountHeader] = useState(true)
    const [mountContent, setMountContent] = useState(false)
    const [isSwitched, setSwitch] = useState(false)
    const [loading, setloading] = useState(true)

    const { TabPane } = Tabs;
    const {Title} = Typography

    const props = useSpring({
        opacity : mountContent ? 1 : 0,
        padding:'1.2em'
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountContent(true);
            setloading(false);
        }, 1300);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
            <AboutHeader loading={loading}/>
            <animated.div style={props}>
                <AboutContainer/>
                <Title>Portfolio</Title>
                <PortfolioContainer/>
                <Title>Contact</Title> 
                <Card style={{margin:'auto', maxWidth:500}}>
                    <Contact/>
                </Card>
            </animated.div>
        </>
    )
    }



export default AboutPage
