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
    const miniaturesVideos = projectsData.map((item, index) => 
        <Popover key={index} content={item.nom}>
            <Avatar style={{margin:4}}shape="square" size={55} src={item.miniature} />
        </Popover>
        )
    return (
        <>
        {miniaturesVideos}
        <Link to="/portfolio">Voir mes projets</Link>
        </>
    )
}
