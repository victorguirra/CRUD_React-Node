import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Pages/Welcome';
import Clients from './Pages/Clients';
import Register from './Pages/Register';
import Update from './Pages/Update';
import Delete from './Pages/Delete';

function Routes(){
    return(
        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact={true} component={Welcome} />
                <Route path="/clients" component={Clients} />
                <Route path="/register" component={Register} />
                <Route path="/update/:_id" component={Update} />
                <Route path="/delete/:_id" component={Delete} />
                
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;