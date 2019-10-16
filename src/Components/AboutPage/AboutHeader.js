import React, {useState, useEffect} from 'react'
import {Avatar, Row, Col, Typography, Icon, Button} from 'antd';
import ReactRotatingText from 'react-rotating-text'
import '../../css/reactrotating.css'
import { Link } from "react-router-dom";
import {useTransition, animated} from 'react-spring'
 
import profilePic from '../../img/PhotoCV.jpg';

const {Title, Paragraph } = Typography;

export default function AboutHeader() {
    const [mounted, setmounted] = useState(false)

    const transitions = useTransition(mounted, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    }) 

    useEffect(() => {
        setmounted(true)
    })

    const HeaderStyle = { 
        background:"#4681A6", 
        boxShadow: '4px 4px 4px rgba(0,0,0,0.25)',
        marginLeft:20,
        marginRight:20,
        padding:'1.2em'
        }
        
            
        
    return (
        <div style ={HeaderStyle}>
            {transitions.map(({ item, key, props }) =>
            <animated.div key={key} style={props}>
            <Row >
                <Col sm={12} md={4}>
                <Avatar  size={150} src={profilePic} />
                </Col>
                <Col sm={12} md={8}>
                    <Title style={{color:'white',fontSize:50}}>
                        Antoine Lot
                    </Title>
                    <Title style={{color:'white',fontSize:15}}>
                        Médias   -   Vidéo   -   Communication   -   E-Commerce
                    </Title>
                </Col >
            </Row>
            </animated.div> 
        )}
        </div>
            
    )
}


