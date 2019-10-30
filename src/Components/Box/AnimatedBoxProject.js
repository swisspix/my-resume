import React, {useState} from 'react'
import {useSpring, animated, config} from 'react-spring'
import { Typography,Button,Card,Icon, Modal, Divider} from 'antd';
import { useMeasure} from '../../utils/helpers';
import ReactPlayer from 'react-player'


function AnimatedBox(props) {
    const { Title, Text, Paragraph } = Typography;
    const { Meta } = Card;
    const[hovered, setHovered] = useState(false)
    const[modalOpen, setmodalOpen]= useState(false)
    
    const divStyle = useSpring({
        zIndex:1,
        overflow:'hidden',
        height: 'auto',
        opacity: hovered ? 1 : 0.6,
        // transform: hovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hovered ? "0 4px 4px 0px #1c1b24" : "0 0px 0px 0px #1c1b24",
        width :'100%', 
        height:'100%',
        marginBottom:5
    })

    const textStyle = useSpring({
        marginLeft:hovered ? 7 : -4,
        marginBottom:0,
        opacity: hovered ? 1 : 0 
    })
    const title = <Title level={4}>{props.title}</Title>

    return (
        <div>
            <a onClick={()=> setmodalOpen(true)}>
                <animated.img 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={divStyle} 
                    config={config.default}
                    src={props.img}/>
            </a>
            <animated.h4 style={textStyle}><b>{props.title}</b></animated.h4>
            <animated.p style={textStyle}>{props.title2}</animated.p>
            
                <Modal
                    visible={modalOpen}
                    onOk={()=> setmodalOpen(false)}
                    onCancel={()=> setmodalOpen(false)}
                    footer={null}
                    style={{ top: 20 }}
                    width={680}
                    closable={true}
                    forceRender={true}
                    >
                    <Title>{props.title}</Title>
                    <Paragraph>{props.description}</Paragraph>
                    <Divider/>
                    
                <ReactPlayer 
                    playing={modalOpen} 
                    style={{width:'100%', height:'100%'}} 
                    url={props.url} />
                </Modal>
        </div>
    )
}



export default AnimatedBox