import React, {Component} from 'react';
import StackGrid from "react-stack-grid"
import sizeMe  from 'react-sizeme'
import AnimatedBoxProject from '../Box/AnimatedBoxProject'

import ProjectData from '../../data/ProjectsData'

import {LoadedContext} from '../../Providers/LoadedContext'

class PortfolioContainer extends Component{
    componentDidMount() {
        setTimeout(() => {
            this.setState({mounted:true})
            console.log(this.grid)
            this.grid.updateLayout();
        }, 200);
    }

    
    render() {
        const { size: {width}} = this.props;
        const videoProjects = ProjectData.map(item => 
            <AnimatedBoxProject
                key={item.id}
                url={item.url}
                title={item.titre}
                title2={item.titrebis}
                description={item.description}
                annee={item.annee}
                img={item.miniature}/>
        )
            return (
                <>
                <StackGrid
                    monitorImagesLoaded={false}
                    columnWidth={width <= 768 ? '100%' : 320}
                    gridRef={el => this.grid = el}
                    gutterWidth={30}
                    gutterHeight={30}
                    appearDelay={140}
                    style={{marginTop:10}}
                    >
                    {videoProjects}
                </StackGrid>
                </>
            )
    }
}

    export default sizeMe()(PortfolioContainer);
