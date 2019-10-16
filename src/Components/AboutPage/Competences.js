import React from 'react'
import "react-sweet-progress/lib/style.css";
import {Typography, Collapse} from 'antd';
import {CompPanelData} from '../../data/compData'

export default function Competences({reload}) {
  const { Panel } = Collapse;
  const { Text } = Typography;

  const compPanels = CompPanelData.map((panel) =>
    <Panel key={panel.id} header={panel.header} extra={panel.icon}>
        <p  style={{ paddingLeft: 24 }}>
          {panel.text}
          
          <br/>
          <br/>
          <Text strong>Outils utilisés :</Text>
          <br/>
        </p>
        
        <div style={{ paddingLeft: 24 }}>
          {panel.listAvatars}
        </div>
    </Panel>
    
    )
    
  return (
    <Collapse 
      accordion 
      bordered={false}
      onChange={reload}>
        {compPanels}
    </Collapse>
  )
}
