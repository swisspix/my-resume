import React, {Component} from 'react'
import AnimatedBox from '../Box/AnimatedBox'

import {Typography} from 'antd'

import Experiences from './Experiences'
import Formations from './Formations'
import Langues from './Langues';
import Competences from './Competences'
import Contact from './Contact'
import Projets from './Projects'
import Apropos from './Apropos'

import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

import AboutImage from '../../img/fintan.jpg'

class AboutContainer extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.setState({mounted:true})
            console.log(this.grid)
        }, 200);
    }

    reloadWithdelay() {
        setTimeout(() => {
            this.grid.updateLayout();
        }, 250);
    }

    render() {
    const { size: {width}} = this.props;
    const showProjets = this.props.showProject

        return (<div style={{marginTop: 10}}>
                <StackGrid
                    columnWidth={width <= 768 ? '100%' : 350}
                    gridRef={el => this.grid = el}
                    gutterWidth={15}
                    gutterHeight={15}
                    appearDelay={180}
                >
                <AnimatedBox
                    title='Quelques mots'
                    icon={"edit"}
                    content={<Apropos/>}
                    />
                <AnimatedBox
                    title='Compétences'
                    icon={"tool"}
                    content={<Competences reload={()=> this.reloadWithdelay()}/>}
                />
                <AnimatedBox
                    title='Experiences'
                    icon={"profile"}
                    content={<Experiences/>}
                    />
                <AnimatedBox
                    title='Formations'
                    icon={"edit"}
                    content={<Formations/>}
                />
                <AnimatedBox
                    title='Langues'
                    icon={"zhihu-circle"}
                    content={<Langues/>}
                />
                {/* <AnimatedBox
                    title='Me contacter'
                    icon={"mail"}
                    content={<Contact/>}
                /> */}
                {/* <AnimatedBox
                    title='Mes projets'
                    icon={"folder-open"}
                    content={<Projets reloadlayout={()=> this.reloadWithdelay()}/>}
                /> */}
            </StackGrid>
            </div>
        )
    }
}

export default sizeMe()(AboutContainer);