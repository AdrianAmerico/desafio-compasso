import React, { useEffect } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { useGetUserGit } from '../../requests/getUserGit';
import { useParams } from 'react-router';
import './maincontent.scss';

function MainContent() {
    const { requestUsers, userData } = useGetUserGit({})
    const params = useParams()

    useEffect(() => {
        requestUsers(params.user)
    }, [params.user])
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