import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './src/pages/HomePage';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}