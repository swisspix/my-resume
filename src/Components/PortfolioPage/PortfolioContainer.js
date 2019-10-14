import React, {Component} from 'react'
import StackGrid from "react-stack-grid"
import ReactPlayer from 'react-player'
import sizeMe from 'react-sizeme'
import renderEmpty from 'antd/lib/config-provider/renderEmpty'
import AnimatedBoxProject from '../Box/AnimatedBoxProject'

import ProjectData from '../../data/ProjectsData'
import Item from 'antd/lib/list/Item'
import ModalVideo from 'react-modal-video'

class PortfolioContainer extends Component {

      componentDidMount() {
        setTimeout(() => {
            this.grid.updateLayout();
        }, 1500);
        }


    render() {
        const { 
            size: { 
              width
            } 
          } = this.props;

    const videoProjects = ProjectData.map(item => 
        <div onMouseEnter={()=>this.grid.updateLayout()}>
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
                style={{marginTop : 10}}
                gutterWidth={10}
                gutterheight={10}
                appearDelay={100}
                >
            {videoProjects}
            </StackGrid>
            </>
        )
    }
    
}

export default sizeMe()(PortfolioContainer);
