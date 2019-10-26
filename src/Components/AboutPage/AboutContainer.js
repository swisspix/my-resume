import React, {Component} from 'react'
import AnimatedBox from '../Box/AnimatedBox'

import {Button} from 'antd'

import Experiences from './Experiences'
import Formations from './Formations'
import Langues from './Langues';
import Competences from './Competences'
import Contact from './Contact/Contact'
import Projets from './Projects'
import Apropos from './Apropos'

import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

import ProjectData from '../../data/ProjectsData'
import AnimatedBoxProject from '../Box/AnimatedBoxProject'

class AboutContainer extends Component {
    constructor() {
        super()
        this.state = {
            mounted:false,
            showProjets:false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.grid.updateLayout();
            this.setState({mounted:true})
        }, 200);
    }

    reloadWithdelay() {
        setTimeout(() => {
            this.grid.updateLayout();
        }, 200);
    }

    render() {
    const { size: {width}} = this.props;
    const showProjets = this.props.showProject

    const videoProjects = ProjectData.map(item => 
        <div>
            <AnimatedBoxProject
                url={item.url}
                title={item.nom}
                description={item.description}
                annee={item.annee}
                img={item.miniature}/>
        </div>)

        return (
            <>
            <StackGrid
                columnWidth={width <= 768 ? '100%' : 400}
                gridRef={grid => this.grid = grid}
                gutterWidth={2}
                gutterheight={2}
                appearDelay={180}
            >
                <AnimatedBox
                    title='Quelques mots'
                    icon={"edit"}
                    content={<Apropos/>}
                    />
                <AnimatedBox
                    title='Mes competences'
                    icon={"tool"}
                    content={<Competences reload={()=> this.reloadWithdelay()}/>}
                />
                <AnimatedBox
                    title='Mes experiences'
                    icon={"profile"}
                    content={<Experiences/>}
                    />
                
                <AnimatedBox
                    title='Mes formations'
                    icon={"edit"}
                    content={<Formations/>}
                />
                <AnimatedBox
                    title='Mes langues'
                    icon={"zhihu-circle"}
                    content={<Langues/>}
                />
                <AnimatedBox
                    title='Me contacter'
                    icon={"mail"}
                    content={<Contact/>}
                />
                <AnimatedBox
                    title='Mes projets'
                    icon={"folder-open"}
                    content={<Projets reloadlayout={()=> this.reloadWithdelay()}/>}
                />
                    {showProjets ? videoProjects: null}
            </StackGrid>
            </>
        )
    }
}

export default sizeMe()(AboutContainer);