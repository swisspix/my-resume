import React,{useEffect}from 'react'
import { Avatar, Popover, Card, Button, Icon,Carousel  } from 'antd';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import AliceCarousel from 'react-alice-carousel';

import projectsData from '../../data/ProjectsData'

import image from '../../img/miniaturesProjets/INSITU.png'
import Item from 'antd/lib/list/Item';

export default function Projets({showProjets, reloadlayout }) {
    {/* {miniaturesVideos}
        <Popover content="voir plus">
            <Button onClick={showProjets} type="dashed" shape="circle" style={{margin:5}} size="large">
                <Icon type="plus" />
            </Button>
        </Popover> */}

    useEffect(reloadlayout)   

    const { Meta } = Card;
    const miniaturesVideos = projectsData.slice(0, 4).map((item, index) => 
        <img src={item.miniature}/>
        )
    return (
        <>
            <Carousel effect="fade" autoplay>
                {miniaturesVideos}
            </Carousel>
        </>
    )
}
