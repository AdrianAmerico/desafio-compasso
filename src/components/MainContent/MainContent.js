import React, { useEffect } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { useGetUserGit } from '../../requests/getUserGit';
import { useParams } from 'react-router';
import './maincontent.scss';

function MainContent() {
    const { requestUsers, userData } = useGetUserGit()
    const params = useParams()
    const { user } = params
    useEffect(() => {
        if (user) {
            requestUsers(user)
        }
    }, [user])
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