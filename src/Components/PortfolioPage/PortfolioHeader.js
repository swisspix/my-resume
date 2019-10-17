import React from 'react'
import {Button, Typography , Icon} from 'antd'
import { Link } from "react-router-dom";

export default function PortfolioHeader(props) {
    const { Title } = Typography;
    return (
        <div>
            <Link to="/">
                <Button  icon="left" loading={props.loading} style={{marginLeft:'50'}}>
                    {props.loading ? '' : 'Retour au profil'}
                        
                </Button>
            </Link>
        </div>
    )
}
