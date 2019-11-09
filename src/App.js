import React, { useContext } from 'react';
import {HashRouter, BrowserRouter as Router} from 'react-router-dom'
import { Layout } from 'antd';
import  ZIndex  from 'react-z-index'
import { useTransition, animated } from 'react-spring'
import Routes from './Routes'
import ScrollToTop from 'react-router-scroll-top'

import AboutPage from './Components/AboutPage'

import {LoadedProvider} from './Providers/LoadedContext'
import { useMediaPredicate } from "react-media-hook";


import './App.css';

export default function App() {
  const { Footer, Content } = Layout;
  const desktop = useMediaPredicate("(min-width: 1280px)");

  const contentStyle = {
    minHeight:500, 
    maxWidth:desktop ? 1250 : null, 
    width:desktop ? 1250 : 'auto',
    marginLeft:desktop ? 'auto' : null, 
    marginRight:desktop ? 'auto' : null,
  }

  return (
        <Layout>
          <div style={contentStyle}>
          <Content >
            <AboutPage/>
          </Content>
          </div>
          <Footer style={{ textAlign: 'center' }}>CV portfolio Antoine Lot ©2019<br/>Projet disponible sur github : https://github.com/swisspix/my-resume</Footer>
        </Layout>
  )
}
