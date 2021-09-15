import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserRepository from '../../components/UserRepository/UserRepository';
import { useGetUserRepos } from '../../requests/getUserRepos';
import ButtonArea from '../../components/ButtonArea/ButtonArea';
import { ItemContainer } from '../../components/ItemContainer';
import { ButtonSection } from '../../common/ButtonSection';
import { Container } from '@material-ui/core';
import LoadingPage from '../LoadingPage/LoadingPage';

function UserProfile() {
    document.title = "Repositório";
    const { requestUsers, userRepos } = useGetUserRepos()
    const params = useParams()
    const { user } = params

    useEffect(() => {
        if (user) {
            requestUsers(user)
        }
    }, [user])

    return (
        <>
            {userRepos && userRepos?.length !== 0 ? (
                <Container>
                    <ItemContainer>
                        {userRepos.map((rep) => {
                            return (
                                <UserRepository rep={rep} key={rep.id} />)
                        })}
                    </ItemContainer>
                    <br />
                    <ButtonSection>
                        <ButtonArea />
                    </ButtonSection>
                    <br />
                </Container>)
                : <LoadingPage />}
        </>
    )
}

export default UserProfile;