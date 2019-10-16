import React, {Component} from 'react'
import AnimatedBox from '../Box/AnimatedBox'

import Experiences from './Experiences'
import Formations from './Formations'
import Langues from './Langues';
import Competences from './Competences'
import Contact from './Contact/Contact'
import Projets from './Projects'
import Apropos from './Apropos'

import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class AboutContainer extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.grid.updateLayout();
        }, 200);
    }
    reloadWithdelay() {
        setTimeout(() => {
            this.grid.updateLayout();
        }, 200);
    }

    render() {

        const { 
            size: { 
              width
            } 
          } = this.props;

        return (
            <StackGrid
                columnWidth={width <= 768 ? '100%' : 400}
                gridRef={grid => this.grid = grid}
                style={{marginTop : 10}}
                gutterWidth={2}
                gutterheight={2}
                appearDelay={0}
                duration={0}
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
                        title='Mes projets'
                        icon={"folder-open"}
                        content={<Projets/>}
                    />
                    <AnimatedBox
                        title='Me contacter'
                        icon={"mail"}
                        content={<Contact/>}
                    />
                </StackGrid>
        )
    }
}

export default sizeMe()(AboutContainer);