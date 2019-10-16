import React, {useContext} from 'react'

import {Switch, Route, __RouterContext} from 'react-router-dom'
import AboutPage from './Pages/About'
import PortfolioPage from './Pages/Portfolio'

import {animated, useTransition} from 'react-spring'

export default function Routes() {

    const { location, history } = useContext(__RouterContext)
    console.log(location.pathname)

    const transitions = useTransition(location, location => location.pathname, {
        from:{opacity: 0},
        enter:{opacity: 1},
        leave:{opacity: 0},
    })
    return (
        <>
        <animated.div >
            <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
            </Switch>
        </animated.div>
        </>
        
    )
        
}