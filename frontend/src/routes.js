import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

function Routes(){
    return(
        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact={true} component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/home/:id" component={Home} />

            </Switch>

        </BrowserRouter>
    )
}

export default Routes;