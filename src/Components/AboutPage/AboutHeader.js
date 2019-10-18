import React, {useState, useEffect} from 'react'
import {Avatar, Row, Col, Typography, Icon, Button} from 'antd';
import ReactRotatingText from 'react-rotating-text'
import '../../css/reactrotating.css'
import { Link } from "react-router-dom";
import {useTransition, animated} from 'react-spring'
 
import profilePic from '../../img/PhotoCV.jpg';

const {Title, Paragraph } = Typography;

export default function AboutHeader(load) {
    const [mounted, setmounted] = useState(false)

    useEffect(() => {
        setmounted(true)
    })

    const transitions = useTransition(mounted, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    }) 

    

    const HeaderStyle = { 
        background:"#4681A6", 
        boxShadow: '4px 4px 4px rgba(0,0,0,0.25)',
        marginLeft:10,
        marginRight:10,
        padding:'1.2em',
        color:'white'
        }
        
        const TypeWelcome = <ReactRotatingText pause={15000} items={['Bienvenue !', 'Bonne visite à vous :)']} />
            
        
    return (
        <div style ={HeaderStyle}>
            {transitions.map(({ item, key, props }) =>
            <animated.div key={key} style={props}>
            <Row >
                <Col sm={6} md={4}>
                <Avatar  size={130} src={profilePic} />
                </Col>
                <Col sm={18} md={8}>
                    <Title style={{color:'white',fontSize:40}}>
                        Antoine Lot
                    </Title>
                    <Title style={{color:'white',fontSize:15}}>
                        Médias   -   Vidéo   -   Communication   -   Ecommerce
                        <br/>
                        <br/>
                        
                    </Title>
                    {load.loading ? <Icon style={{color:'white'}} type="loading" /> : TypeWelcome}
                </Col >
            </Row>
            </animated.div> 
        )}
        </div>
            
    )
}


