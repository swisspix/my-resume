import React from 'react'
import {Button, Typography , Icon} from 'antd'
import { Link } from "react-router-dom";

export default function PortfolioHeader() {
    const { Title } = Typography;
    return (
        <div>
            <Link to="/">
                <Button>
                    <Icon type="left" />
                    Retour au profil
                </Button>
            </Link>
        </div>
    )
}
