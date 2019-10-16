import React, {useState} from 'react'
import {Avatar, Row, Col, Typography, Icon, Button} from 'antd';
import ReactRotatingText from 'react-rotating-text'
import '../../css/reactrotating.css'
import { Link } from "react-router-dom";
import {useSpring, animated} from 'react-spring'
 
import profilePic from '../../img/PhotoCV.jpg';

const {Title, Paragraph } = Typography;

export default function AboutHeader() {

    const HeaderStyle = { 
        background:"#4681A6", 
        boxShadow: '4px 4px 4px rgba(0,0,0,0.25)',
        marginLeft:10,
        marginRight:10,
        padding:'1.2em'
        }
    
    return (
        <div style ={HeaderStyle}>
            <Row >
                <Col sm={12} md={4}>
                    <Avatar style={{textAlign:'center'}} size={150} src={profilePic} />
                </Col>
                <Col sm={12} md={8}>
                    <Title style={{color:'white',fontSize:50}}>
                        Antoine Lot
                    </Title>
                    <Title style={{color:'white',fontSize:15}}>
                        Médias   -   Vidéos   -   Communication   -   E-Commerce
                    </Title>
                </Col >
            </Row>
        </div>
            
    )
}


