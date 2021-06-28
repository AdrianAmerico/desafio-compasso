import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { GlobalStateContext } from '../global/GlobalContext';
import { useGetUserGit } from '../requests/getUserGit';
import UserProfile from '../pages/UserProfile/UserProfile';
import MainContent from '../components/MainContent/MainContent';
import StarredPage from '../pages/StarredPage/StarredPage';

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
                    </Route>

                    <Route exact path="/:user/repository">
                        <UserProfile />
                    </Route>

                    <Route exact path="/:user/starred">
                        <StarredPage />
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