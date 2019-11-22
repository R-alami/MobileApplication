import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons';

import Homepage from '../Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Login } from '../Login';


/* Stylde Components */
const Nav = styled(Link)`
    display:flex;
    justify-content: space-around;
    padding: 10px;
    /* margin: 5px; */
    border-top: 1px solid #D3D3D3;

    .nav-icons{
        font-size:26px;
        color: #D3D3D3;

        &:hover, &:active{
            color: #29979C;
        }

    }
`;


export const Navbar = () => {
    return (
        <Router>
            <Nav className="fullpage-nav">
                <Link activeClassName="active" to='/' activeStyle={{ color: '#29979C' }}>
                    <FontAwesomeIcon className="nav-icons" icon={faHome} /* size="2x" */ />
                </Link>
                <Link activeClassName="active" to='/login'>
                    <FontAwesomeIcon className="nav-icons" icon={faSignInAlt} /* size="2x" */ />
                </Link>
                <Link activeClassName="active" to='/more'>
                    <FontAwesomeIcon className="nav-icons" icon={faSlidersH} /* size="2x" */ />
                </Link>
            </Nav>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/login' component={Login} />
                <Route path='/more'>MORE</Route>
            </Switch>
        </Router>
    )
}