import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { GlobalStateContext } from '../global/GlobalContext';
import { useGetUserGit } from '../requests/getUserGit';
import UserProfile from '../pages/UserProfile/UserProfile';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import MainContent from '../components/MainContent/MainContent';

function Router() {
    const { requestUsers, userData } = useGetUserGit([])
    return (
        <GlobalStateContext.Provider value={{ requestUsers, userData }}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/:user">
                        <MainContent />
                        {/* <Header />
                        <Card userData={userData} /> */}
                    </Route>

                    <Route exact path="/:user/repository">
                        <UserProfile />
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