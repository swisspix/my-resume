import React, {useState} from 'react'
import {useSpring, animated, config} from 'react-spring'
import { Typography,Button,Card,Icon, Modal, Divider  } from 'antd';
import { useMeasure} from '../../utils/helpers';
import ReactPlayer from 'react-player'


function AnimatedBox(props) {
    const { Title, Text, Paragraph } = Typography;
    const { Meta } = Card;
    const[hovered, setHovered] = useState(false)
    const[modalOpen, setmodalOpen]= useState(false)
    
    const divStyle = useSpring({
        zIndex:1,
        margin :10,
        overflow:'hidden',
        height: 'auto',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hovered ? "0 4px 4px 0px #1c1b24" : "0 0px 0px 0px #1c1b24",
    })

    const title = <Title level={4}>{props.title}</Title>

    return (
        <animated.div   
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={divStyle} 
            config={config.default}
            >
            <a onClick={()=> setmodalOpen(true)}>
                <img style={{width :'100%', height:'100%'}}  src={props.img}/>
            </a>
            
                <Modal
                    visible={modalOpen}
                    onOk={()=> setmodalOpen(false)}
                    onCancel={()=> setmodalOpen(false)}
                    footer={null}
                    style={{ top: 20 }}
                    width={680}
                    closable={false}
                    forceRender={true}
                    >
                    <Title>{props.title}</Title>
                    <Paragraph>{props.description}</Paragraph>
                    <Divider/>
                <ReactPlayer style={{width:'100%', height:'100%'}} url={props.url} />
                </Modal>
        </animated.div>
    )
}



export default AnimatedBox