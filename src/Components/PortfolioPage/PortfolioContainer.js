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
            size: { 
              width
            } 
          } = this.props;

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
            <>
            <StackGrid
                monitorImagesLoaded={false}
                columnWidth={width <= 768 ? '100%' : 300}
                gridRef={grid => this.grid = grid}
                style={{
                    marginTop:10,
                    marginLeft:'auto', 
                    marginRight:'auto', 
                    maxWidth:1500,
                    }}
                gutterWidth={10}
                gutterheight={5}
                appearDelay={100}
                >
            <Link to="/">
                <Button type>
                    <Icon type="left" />
                    Retour au profil
                </Button>
            </Link>
            {videoProjects}
            </StackGrid>
            </>
        )
    }
    
}

export default sizeMe()(PortfolioContainer);
