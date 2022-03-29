import React from 'react'
// import { NavLink } from "react-router-dom";
import Home from './Home';
import AnimalContainer from './AnimalContainer';
import Adopters from './Adopters';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function NavBar({animals}) {


    const routes = [
        {
            path: "/",
            exact: true,
            sidebar: () => <div></div>,
            main: () => <Home />,
        },
        {
            path: "/available-pets",
            sidebar: () => <div></div>,
            main: () => <AnimalContainer animals={animals} />,
        },
        {
            path: "/adopters",
            sidebar: () => <div></div>,
            main: () => <Adopters />,
        },
        {
            path: "/about-us",
            sidebar: () => <div></div>,
            main: () => <AboutUs />,
        }
        ];
    
        return (
            <Router>
                <div style={{ display: "flex" }}>
                <div
                    style={{
                    padding: "25px",
                    width: "300x",
                    background: "#f0f0f0",
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li className='home-link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='available-pets-link'>
                        <Link to="/available-pets">Available Pets</Link>
                    </li>
                    <li className='adopters-link'>
                        <Link to="/adopters">Interested in Adopting?</Link>
                    </li>
                    <li className='about-link'>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    </ul>
    
                    <Switch>
                    {routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.sidebar />}
                        />
                    ))}
                    </Switch>
                </div>
    
                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                    {routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                        />
                    ))}
                    </Switch>
                </div>
                </div>
        </Router>
        );
}

export default NavBar