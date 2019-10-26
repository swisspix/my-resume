import React, {useState, useEffect} from 'react'

import AboutContainer from '../../Components/AboutPage/AboutContainer'
import AboutHeader from '../../Components/AboutPage/AboutHeader';
import PortfolioContainer from '../../Components/PortfolioPage/PortfolioContainer'
import Contact from '../../Components/AboutPage/Contact'

import BackgroundImgAbout from '../../img/fintan.jpg'
import BackgroundImgPortfolio from '../../img/background-white.jpg'

import { Tabs, Card } from 'antd';


import {useSpring, useTransition, animated} from 'react-spring'

function AboutPage() {
    const [mountHeader, setMountHeader] = useState(true)
    const [mountContent, setMountContent] = useState(false)
    const [isSwitched, setSwitch] = useState(false)
    const [loading, setloading] = useState(true)

    const { TabPane } = Tabs;

    const props ={
        opacity : mountContent , 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountContent(true);
            setloading(false);
        }, 1300);
        return () => clearTimeout(timer);
      }, []);

    return (
        <animated.div style={props}>
            <AboutHeader loading={loading}/>
            <div style={{backgroundColor:'rgba(255,255,255, 0.5)'}}>
            <Tabs 
                tabPosition='left'
                destroyInactiveTabPane={true} 
                size={'large'}  
                defaultActiveKey="1" 
                style={{color:'black',padding:'1.2em'}}>
                <TabPane forceRender={true} tab="A Propos" key="1">
                    <AboutContainer/>
                </TabPane>
                <TabPane forceRender={true} tab="Mes projets" key="2">
                    <PortfolioContainer/>
                </TabPane>
                <TabPane forceRender={true} tab="Contact" key="3">
                    <Card style={{margin:'auto', maxWidth:500}}>
                    <Contact/>
                    </Card>
                </TabPane>
            </Tabs>
            </div>
            
        </animated.div>
    )
    }



export default AboutPage
