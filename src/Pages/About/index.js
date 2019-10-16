import React from 'react'
import Welcome from '../../Components/AboutPage/AboutHeader'
import AboutContainer from '../../Components/AboutPage/AboutContainer'

import BackgroundImg from '../../img/fintan.jpg'
import { Parallax} from 'react-parallax';

import  ZIndex  from 'react-z-index'
import AboutHeader from '../../Components/AboutPage/AboutHeader';
import Header from '../../Components/AboutPage/AboutHeader';
import AbsoluteWrapper from '../../Components/Box/AbsoluteWrapper';

function AboutPage() {
        return (
            <Parallax
                bgImage={BackgroundImg}
                bgImageAlt="the cat"
                strength={100}
                appearDelay={100}
            >
                <Header/>
                <div style={{ minHeight: '1000px' }}>
                    <AboutContainer/>
                </div>
            </Parallax>
        )
    }



export default AboutPage
