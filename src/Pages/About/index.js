import React from 'react'
import Welcome from '../../Components/AboutPage/AboutHeader'
import AboutContainer from '../../Components/AboutPage/AboutContainer'

import BackgroundImg from '../../img/fintan.jpg'
import { Parallax} from 'react-parallax';

import  ZIndex  from 'react-z-index'
import AboutHeader from '../../Components/AboutPage/AboutHeader';
import Header from '../../Components/Box/Header';

function AboutPage() {
        return (
                <Parallax
                    bgImage={BackgroundImg}
                    bgImageAlt="the cat"
                    strength={100}
                    appearDelay={100}
                >
                    <div style={{ minHeight: '1000px' }}>
                    <ZIndex index={2}>
                        <Header 
                            content={<AboutHeader/>}
                            color="#4681A6" />
                    </ZIndex>
                    <ZIndex index={1}>
                        <AboutContainer/>
                    </ZIndex>
                    </div>
                    
                </Parallax>
        )
    }



export default AboutPage
