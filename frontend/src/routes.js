import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Register from './Pages/Register';

function Routes(){
    return(
        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact={true} component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

            </Switch>

        </BrowserRouter>
    )
}

export default Routes;