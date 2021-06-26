import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { GlobalStateContext } from '../global/GlobalContext';

function Router() {
    const [data, setData] = useState("aaaaaaa")
    return (
        <GlobalStateContext.Provider value={{ data, setData }}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/login">
                        <LoginPage />
                    </Route>

                    <Route>
                        <h1>Error</h1>
                    </Route>

                </Switch>
            </BrowserRouter>
        </GlobalStateContext.Provider>
    )
}

export default Router;