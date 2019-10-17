import React, {useState, useEffect} from 'react'

import AboutContainer from '../../Components/AboutPage/AboutContainer'
import BackgroundImg from '../../img/fintan.jpg'
import AboutHeader from '../../Components/AboutPage/AboutHeader';

import { Parallax } from 'react-parallax';
import {useTransition, animated} from 'react-spring'

function AboutPage() {
    const [mountHeader, setMountHeader] = useState(true)
    const [mountAboutContainer, setMountAboutContainer] = useState(false)
    const [loading, setloading] = useState(true)

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setMountAboutContainer(true);
            setloading(false);
        }, 1300);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div style={{backgroundImage: 'url(' + BackgroundImg + ')', minHeight:1000}}>
        <AboutHeader loading={loading}/>
        {mountAboutContainer ? <AboutContainer/> : null}
        </div>
    )
    }



export default AboutPage
