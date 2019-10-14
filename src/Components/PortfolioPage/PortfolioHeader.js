import React from 'react'
import {Button, Typography , Icon} from 'antd'
import { Link } from "react-router-dom";

export default function PortfolioHeader() {
    const { Title } = Typography;
    return (
        <div>
            <Link to="/">
                <Title type="secondary" level={4}><Icon type="arrow-left" /> Retour au CV </Title>
            </Link>
        </div>
    )
}
