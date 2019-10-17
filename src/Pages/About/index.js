import React, {useState, useEffect} from 'react'

import AboutContainer from '../../Components/AboutPage/AboutContainer'
import BackgroundImg from '../../img/fintan.jpg'
import Header from '../../Components/AboutPage/AboutHeader';

import { Parallax } from 'react-parallax';
import {useTransition, animated} from 'react-spring'

function AboutPage() {
    const [mountHeader, setMountHeader] = useState(true)
    const [mountAboutContainer, setMountAboutContainer] = useState(false)

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setMountAboutContainer(true)
        }, 450);
        return () => clearTimeout(timer);
      }, []);
    


        return (
            <div style={{backgroundImage: 'url(' + BackgroundImg + ')', minHeight:1000}}>
            {mountHeader ? <Header/> : null}
            {mountAboutContainer ? <AboutContainer/> : null}
            
            
            </div>
        )
    }



export default AboutPage
