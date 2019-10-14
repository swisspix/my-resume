import React from 'react'

import {Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Home/Homepage'
import AboutPage from './Pages/About/aboutPage'
import ContactPage from './Pages/Contact/ContactPage'

export default function Routes() {
    return (
        <Switch>
            {/* <Route path="/home"  component={props => <Homepage />} /> */}
            <Route path="/" component={props => <AboutPage />} />
            <Route path="/contact" component={props => <ContactPage />} />
        </Switch>
    )
        
}