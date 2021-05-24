import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Login} from "./main/ui/component/login/login";
import {Registration} from "./main/ui/component/registration/registration";
import {Page404} from "./main/ui/component/page404/page404";
import {PasswordRecovery} from "./main/ui/component/passwordRecovery/passwordRecovery";
import {EnteringNewPassword} from "./main/ui/component/enteringNewPassword/enteringNewPassword";
import {Profile} from "./main/ui/component/profile/profile";
import {Test} from './main/ui/component/test/test';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/page404'} render={() => <Page404/>}/>
                <Route path={'/passwordRecovery'} render={() => <PasswordRecovery/>}/>
                <Route path={'/enteringNewPassword'} render={() => <EnteringNewPassword/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/test'} render={() => <Test/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
