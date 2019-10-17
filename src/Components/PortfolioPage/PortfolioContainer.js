import React, {Component} from 'react'
import StackGrid from "react-stack-grid"
import sizeMe from 'react-sizeme'
import AnimatedBoxProject from '../Box/AnimatedBoxProject'
import {Button, Icon} from 'antd'

import ProjectData from '../../data/ProjectsData'

import { Link } from "react-router-dom";

class PortfolioContainer extends Component {

      componentDidMount() {
        setTimeout(() => {
            this.grid.updateLayout();
        }, 500);
        }


    render() {
        const { 
            size: { width}  } = this.props;

    const videoProjects = ProjectData.map(item => 
        <div>
            <AnimatedBoxProject
                url={item.url}
                title={item.nom}
                description={item.description}
                annee={item.annee}
                img={item.miniature}/>
        </div>
        
        )

        return (
            <StackGrid
                monitorImagesLoaded={false}
                columnWidth={width <= 768 ? '100%' : 270}
                gridRef={grid => this.grid = grid}
                gutterWidth={20}
                gutterheight={5}
                appearDelay={140}
                style={{marginTop:10}}
                >
                {videoProjects}
            </StackGrid>
        )
    }
    
}

export default sizeMe()(PortfolioContainer);
