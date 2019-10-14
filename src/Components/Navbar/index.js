import React, { Component } from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Route} from 'react-router-dom'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Routes from '../../Routes';
import { Icon } from 'antd';

class Navbar extends Component {
	state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

  render() {
    return (
        <Route render={({location, history}) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="about">
                        <NavItem eventKey="home">
                            <NavIcon>
                            <Icon type="home" />
                                </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <Icon type="user" />
                            </NavIcon>
                            <NavText>
                                About
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="portfolio">
                            <NavIcon>
                                <Icon type="picture" />
                            </NavIcon>
                            <NavText>
                                Portfolio
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact">
                            <NavIcon>
                                <Icon type="mail" />
                            </NavIcon>
                            <NavText>
                                Contact
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <div style={pages}>
                    <Routes/>
                </div>
            </React.Fragment>
        )}
        />
      );
  }
}

const pages = {
    marginLeft: 64
}

export default Navbar;