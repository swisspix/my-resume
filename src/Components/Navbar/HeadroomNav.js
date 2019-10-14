import React from 'react'
import Headroom from 'react-headroom'
import linksData from '../../data/linksData'
import { Link} from 'react-router-dom'
import { Icon, Typography} from 'antd';
import {useSpring, animated, config} from 'react-spring'

export default function HeadroomNav() {
    const { Text } = Typography;
    const linklist = linksData.map(link =>
        <div key={link.id}>
            
                <li ><Icon type={link.icon} style={linkStyle} /></li>
        </div>
        )
    
    return (
        <Headroom style={{
            background: '#085CA6',
            boxShadow: '2px 2px 2px rgba(0,0,0,0.25)',
            height: 50,
            position: 'fixed',
            width: '100%'
        }}>
            <ul style={{listStyleType: 'none', marginLeft: 30,padding: 0, overflow: 'hidden'}}>
                {linklist}
                <li style={{float:'right'}}>
                    <Text style={{float:'right', marginRight:50, color:'white', fontSize:15, marignBottom:0}}>Antoine Lot</Text>
                    <br/>
                    <Text style={{marginRight:50, color:'white', fontSize:15}}>antoinum@gmail.com</Text>
                </li>
            </ul>
    </Headroom>
    )
}

const linkStyle = {
    float: 'left', 
    color:'white', 
    margin: 10,
    fontSize : 25
}


