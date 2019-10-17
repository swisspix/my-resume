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
        <div style={{
                backgroundImage: 'url(' + BackgroundImg + ')', 
                minHeight:1000,
                padding:'1.2em'
                }}>
            <PortfolioContainer/>
        </div> 
    )
}
