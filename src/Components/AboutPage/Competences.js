import React from 'react'
import "react-sweet-progress/lib/style.css";
import {Typography, Collapse, Icon} from 'antd';
import {CompPanelData} from '../../data/compData';
import {useSpring, animated} from 'react-spring'

export default function Competences({reload}) {
  const { Panel } = Collapse;
  const { Text } = Typography;
  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 5,
    border: 0,
    overflow: 'hidden',
  };

  const compPanels = CompPanelData.map((panel) =>
    <Panel 
      forceRender={true}
      key={panel.id} 
      header={panel.header} 
      extra={panel.icon}
      style={customPanelStyle}
      >
        <p >
          {panel.text}
          
          <br/>
          <br/>
          <Text strong>Outils utilisés :</Text>
          <br/>
        </p>
        
        <div>
          {panel.listAvatars}
        </div>
    </Panel>
    
    )
    
  return (
    <Collapse 
      accordion={true}
      onChange={reload}
      bordered={false}
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      expandIconPosition={'left'}>
        {compPanels}
    </Collapse>
  )
}
