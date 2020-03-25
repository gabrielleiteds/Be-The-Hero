import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import pages 
import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
 
function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component = {Logon} />
                <Route path='/register' component = {Register} />
                <Route path='/profile' component = {Profile} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;