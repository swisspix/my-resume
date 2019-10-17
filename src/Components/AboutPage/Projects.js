import React from 'react'
import { Avatar, Popover, Card, Button } from 'antd';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import AliceCarousel from 'react-alice-carousel';

import projectsData from '../../data/ProjectsData'

import image from '../../img/miniaturesProjets/INSITU.png'
import Item from 'antd/lib/list/Item';

export default function Projets() {

    const { Meta } = Card;
    const miniaturesVideos = projectsData.slice(0, 3).map((item, index) => 
        <Popover key={index} content={item.nom}>
            <Avatar style={{margin:5}} shape="square" size={55} src={item.miniature} />
        </Popover>
        )
    return (
        <>
        {miniaturesVideos}
        <Link to="/portfolio"><Avatar style={{margin:5}} shape="square" size={55}>Voir plus !</Avatar></Link>
        
        </>
    )
}
