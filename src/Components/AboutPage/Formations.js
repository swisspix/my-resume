import React from 'react'
import { Timeline} from 'antd';

import formData from '../../data/formationsData'

export default function Formations() {

    const formDatas =  formData.map(item => 
        <Timeline.Item  color='#3498db' key={item.id}>
            <h5>{item.date}</h5>
            <h4>{item.title}</h4>
            <p>{item.ecole} - {item.lieu}</p>
        </Timeline.Item>)

    return (
        <div style={{marginTop : 30}}>
            <Timeline>
                {formDatas} 
            </Timeline>
            
        </div>
    )
}
