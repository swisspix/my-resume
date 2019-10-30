import React, {useState, useEffect} from 'react'

import AboutContainer from '../../Components/AboutPage/AboutContainer'
import Header from '../../Components/AboutPage/AboutHeader';
import PortfolioContainer from '../../Components/PortfolioPage/PortfolioContainer'
import Contact from '../../Components/AboutPage/Contact'

import BackgroundImgAbout from '../../img/fintan.jpg'
import BackgroundImgPortfolio from '../../img/background-white.jpg'

import { Tabs, Card, Typography, Divider, Anchor, Layout, Row, Col } from 'antd';
import {useSpring, useTransition, animated} from 'react-spring'

function AboutPage() {
    const [headerMounted, setHeaderMounted] = useState(false)
    const [aboutMounted, setAboutMounted] = useState(false)
    const [portfolioMounted, setPortolioMounted] = useState(false)

    const[mountContent,setMountContent] = useState(false)

    const [loading, setloading] = useState(true)

    const { TabPane } = Tabs;
    const {Title} = Typography
    const {Link} = Anchor
    const props = useSpring({
        opacity : mountContent ? 1 : 0,
        paddingLeft:'2em',
        paddingRight:'2em',
        maxWidth : 1400,
        margin:'auto',
        backgroundImage:"url("+BackgroundImgAbout+")"
    })

    const linkstyle = { marginTop : 10, marginBottom : 10}

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountContent(true);
            setloading(false);
        }, 1300);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
            <Header loading={loading}/>
            <animated.div style={props}>
                <Row>
                    <Col span={22} >
                        <a id="acceuil"></a>
                        <AboutContainer mounted={() => setAboutMounted(true)} />
                    <Divider/>
                        <a id="portfolio"></a>
                        <Title>Portfolio</Title>
                        <PortfolioContainer mounted={() => setPortolioMounted(true)}/>
                    <Divider/>
                        <a id="contact"></a>
                        <Title>Contact</Title>
                        <Card style={{margin:'auto', maxWidth:500}}>
                            <Contact/>
                        </Card>
                    </Col>
                    <Col span={2} >
                    <Anchor style={{paddingLeft:20, backgroundColor:'rgba(225,225,225,0)'}}>
                        <br/>
                            <Link href="#acceuil" title="Acceuil"/>
                            <Link href="#portfolio" title="Portfolio"/>
                            <Link href="#contact" title="Contact"/>
                    </Anchor>
                    </Col>
                </Row>
            </animated.div>
        </>
    )
    }



export default AboutPage
