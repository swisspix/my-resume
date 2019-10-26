import React, {useState, useEffect} from 'react'

import AboutContainer from '../../Components/AboutPage/AboutContainer'
import AboutHeader from '../../Components/AboutPage/AboutHeader';
import PortfolioContainer from '../../Components/PortfolioPage/PortfolioContainer'

import BackgroundImgAbout from '../../img/fintan.jpg'
import BackgroundImgPortfolio from '../../img/background-white.jpg'

import { Tabs, Card } from 'antd';


import {useSpring, useTransition, animated} from 'react-spring'

function AboutPage() {
    const [mountHeader, setMountHeader] = useState(true)
    const [mountAboutContainer, setMountAboutContainer] = useState(false)
    const [isSwitched, setSwitch] = useState(false)
    const [loading, setloading] = useState(true)

    const { TabPane } = Tabs;

    const props ={
        backgroundImage: 'url(' + BackgroundImgAbout + ')' , 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountAboutContainer(true);
            setloading(false);
        }, 1300);
        return () => clearTimeout(timer);
      }, []);

    return (
        <animated.div style={props}>
            <AboutHeader loading={loading}/>
            <div style={{backgroundColor:'rgba(255,255,255, 0.5)'}}>
            <Tabs destroyInactiveTabPane={true} size={'large'}  defaultActiveKey="1" style={{padding:'1.2em'}}>
                <TabPane forceRender={true} tab="A Propos" key="1">
                    <AboutContainer/>
                </TabPane>
                <TabPane forceRender={true} tab="Mes projets" key="2">
                    <PortfolioContainer/>
                </TabPane>
            </Tabs>
            </div>
            
        </animated.div>
    )
    }



export default AboutPage
