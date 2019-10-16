import React from 'react'
import Header from '../../Components/Box/Header'
import { Parallax} from 'react-parallax';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioHeader from '../../Components/PortfolioPage/PortfolioHeader';
import PortfolioContainer from '../../Components/PortfolioPage/PortfolioContainer';

import BackgroundImg from '../../img/zach2.jpg'

import AbsoluteWrapper from '../../Components/Box/AbsoluteWrapper'

export default function PortfolioPage() {
    return (
            <Parallax
                bgImage={BackgroundImg}
                bgImageAlt="the cat"
                strength={100}
                appearDelay={100}>
                    <PortfolioContainer/>
            </Parallax>
    )
}
