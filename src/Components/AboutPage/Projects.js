import React,{useEffect}from 'react'
import { Card, Carousel  } from 'antd';

import projectsData from '../../data/ProjectsData'

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
