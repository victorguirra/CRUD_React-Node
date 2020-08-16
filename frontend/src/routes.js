import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Pages/Welcome';


function Routes(){
    return(
        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact={true} component={Welcome} />
                
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;