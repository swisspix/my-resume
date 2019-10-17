import React,{useState, useEffect} from 'react'
import Header from '../../Components/Box/Header'
import { Parallax} from 'react-parallax';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioHeader from '../../Components/PortfolioPage/PortfolioHeader';
import PortfolioContainer from '../../Components/PortfolioPage/PortfolioContainer';

import BackgroundImg from '../../img/zach2.jpg'

import AbsoluteWrapper from '../../Components/Box/AbsoluteWrapper'

export default function PortfolioPage() {
    const [mountPortfolioContainer, setPortfolioContainer] = useState(false)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPortfolioContainer(true)
            setloading(false)
        }, 1500);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div style={{
                backgroundImage: 'url(' + BackgroundImg + ')', 
                minHeight:1000,
                padding:'1.2em'
                }}>
            <PortfolioHeader loading={loading}/>
            {mountPortfolioContainer ? <PortfolioContainer loading={loading}/> : null}
            
        </div> 
    )
}
