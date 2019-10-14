import React from 'react'
import { List, Avatar } from 'antd';
import LanguesData from '../../data/languesData'

export default function Langues() {
    return (
            <List
                itemLayout="horizontal"
                dataSource={LanguesData}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={item.flagSrc} />}
                    title={item.langue}
                    description={item.niveau}
                    />
                </List.Item>
                )}
            />
    )
}
