import React, {Component} from 'react'
import { Timeline, Modal} from 'antd';

import ExperiencesData from '../../data/experiencesData'

export default class Experiences extends Component {
    constructor() {
        super()
        this.state = {
            showModal:false,
            modalTitle:'',
            modalText:'',
            modalLink:''
        }
        this.handleClick = this.handleClick.bind(this)
        this.closeModal = this.closeModal.bind(this)
      }
    handleClick(id){
        this.setState({
            showModal:true,
            modalTitle:ExperiencesData[id].poste,
            modalText:ExperiencesData[id].description,
            modalLink:ExperiencesData[id].link
        })
        console.log(ExperiencesData[id].description)
    }
    closeModal() {
        this.setState({
            showModal:false
        })
    }

    info(id) {
        Modal.info({
          title:ExperiencesData[id].poste,
          content: (
            <div>
                <h4>{ExperiencesData[id].lieu}</h4>
                <br/>
                <p>{ExperiencesData[id].description}</p>
                <a target="_blank" rel="noopener noreferrer" href={ExperiencesData[id].link}>{ExperiencesData[id].link}</a>
            </div>
          ),
          onOk() {},
        });
      }
    
    render() {
        const exData =  ExperiencesData.map(item => 
            <Timeline.Item color={item.color} key={item.id}>
                <h5 >{item.dateDebut} - {item.dateFin}</h5>
                <h4>{item.lieu}</h4>
                <p><a onClick={()=> this.info(item.id)}>{item.poste}</a></p>
                
                {/* <Button type="secondary" shape="circle" icon="search" /> */}
            </Timeline.Item>
        )
        return (
            <div style={{marginTop : 30}}>
                <Timeline mode="alternate">
                    {exData} 
                </Timeline>
            </div>
        )
    }
}

