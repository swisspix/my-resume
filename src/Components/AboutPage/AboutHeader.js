import React, {useState} from 'react'
import {Avatar, Row, Col, Typography, Icon, Button} from 'antd';
import ReactRotatingText from 'react-rotating-text'
import '../../css/reactrotating.css'
import { Link } from "react-router-dom";
import {useSpring, animated} from 'react-spring'
 
import profilePic from '../../img/PhotoCV.jpg';

const {Title, Paragraph } = Typography;

export default function AboutHeader() {
    const[hovered,setHovered] = useState(false)

    const link = useSpring({
        height:'100%', 
        background:hovered? '#2c3e50' : '#4681A6',
        margin:'auto',
        verticalAlign:'bottom'
    })

    return (
            <Row >
                <Col sm={24} md={4}>
                    <Avatar style={{textAlign:'center'}} size={170} src={profilePic} />
                </Col>
                <Col sm={24} md={8}>
                    <Title style={{color:'white',fontSize:50}}>
                        Antoine Lot
                    </Title>
                        <ReactRotatingText 
                            deletingInterval={30}
                            typingInterval = {30}
                            emptyPause = {1500}
                            style={{color:'white'}}
                        items={[
                            "Bonjour !", "Bienvenue !", 
                            "Retrouvez ci-dessous mon parcours professionnel, mes compétences, les formations que j'ai suivies ainsi que les langues que je parle aujourd'hui.", ]} 
                            />
                </Col >
            </Row>
    )
}


