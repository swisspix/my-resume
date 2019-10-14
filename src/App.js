import React, { useContext } from 'react';
import {HashRouter, BrowserRouter as Router, __RouterContext, Switch, Route} from 'react-router-dom'
import {Layout} from 'antd';
import  ZIndex  from 'react-z-index'

import AboutPage from './Pages/About'
import PortfolioPage from './Pages/Portfolio';

import './App.css';

const App = () => {
  const {Footer } = Layout;

  const location = useContext(__RouterContext)

  console.log(location)

  // const transitions = useTransition(location, location => location.pathname, {
  //   from: {opacity :0},
  //   enter:{opacity :1},
  //   leave:{opacity :0}
  // });
  return (
      <HashRouter basename='/'>
        {/* <ZIndex index={10}>
          <HeadroomNav/>
        </ZIndex> */}
        <ZIndex index={4}>
          <Switch>
              {/* <Route path="/home"  component={props => <Homepage />} /> */}
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
          </Switch>
        </ZIndex>
          
        
        <Footer style={{ textAlign: 'center' }}>CV portfolio Antoine Lot ©2019 Créé from scratch par Antoine Lot</Footer>
      </HashRouter>
  )
}

export default App;
