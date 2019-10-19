import React, {useState} from 'react'
import {useSpring, animated, config} from 'react-spring'
import { Typography,Button,Card,Icon } from 'antd';
import { useMeasure} from '../../utils/helpers'

function AnimatedBox(props) {
    const { Title } = Typography;
    const[expanded, setExpanded] = useState(true)
    const[hovered, setHovered] = useState(false)

    const AnimatedIcon = animated(Icon)

    function toggleExpanded() {
        setExpanded(expanded? false : true);
    }
    
    const divStyle = useSpring({
        zIndex:1,
        margin :10,
        overflow:'hidden',
        height: 'auto',
        // marginTop : appeared ? 0 : 0,
        // opacity: appeared ? 1 : 0,

        transform: hovered ? 'scale(1)' : 'scale(1)',
        boxShadow: hovered ? "0 4px 4px 0px #1c1b24" : "0 0px 0px 0px #1c1b24",
    })

    const rotate = useSpring({degree: hovered ? 10 : 30})
    
    const icon = <Icon size={rotate.degree} type={props.icon} theme="filled" style={{fontSize:20}}/>

    const title = props.title

    return (
        <animated.div   
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={divStyle} 
            config={config.default}
            >
            <Card bordered={false} title={title}>
                {props.content}
            </Card>
        </animated.div>
    )
}



export default AnimatedBox