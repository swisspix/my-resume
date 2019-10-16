import React, { useContext } from 'react';
import {HashRouter, BrowserRouter as Router} from 'react-router-dom'
import { Layout } from 'antd';
import  ZIndex  from 'react-z-index'
import { useTransition, animated } from 'react-spring'
import Header from './Components/AboutPage/AboutHeader'
import Routes from './Routes'

import './App.css';

export default function App() {
  const {Footer } = Layout;

  return (
      <Router>
        <ZIndex index={4}>
          <Routes/>
        </ZIndex>
        <Footer style={{position:'fixed', textAlign: 'center' }}>CV portfolio Antoine Lot ©2019</Footer>
      </Router>
  )
}
