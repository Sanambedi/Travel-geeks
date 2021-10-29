import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Events from './pages/Events';
import HomePage from './pages/HomePage';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/Events" exact component={Events}/>
                <Route path="/About" exact component={About}/>
                <Route path="/Blog" exact component={Blog}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;