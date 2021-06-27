import React, { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../global/GlobalContext';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { useGetUserGit } from '../../requests/getUserGit';
import { useParams } from 'react-router';

function MainContent() {
    const { requestUsers, userData } = useGetUserGit({})
    // const { userData } = useContext(GlobalStateContext)
    const params = useParams()
    console.log(userData)
    useEffect(() => {
        requestUsers(params.user)
    }, [])
    console.log(userData)
    return (
        <>
            <Header />
            <main>
                <Card userData={userData} />
            </main>
        </>
    )
}
export default MainContent;