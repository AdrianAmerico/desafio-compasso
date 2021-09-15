import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonSection } from '../../common/ButtonSection';
import ButtonArea from '../../components/ButtonArea/ButtonArea';
import { ItemContainer } from '../../components/ItemContainer';
import UserRepository from '../../components/UserRepository/UserRepository';
import { useGetUserStarred } from '../../requests/getUserStarred';
import LoadingPage from '../LoadingPage/LoadingPage';

function StarredPage() {
    document.title = "Favoritos";
    const params = useParams()
    const { requestStarred, userStarred } = useGetUserStarred()
    const { user } = params
    useEffect(() => {
        requestStarred(user)
    }, [user])

    return (
        <>
            {
                userStarred && userStarred?.length !== 0 ? (
                    <Container>
                        <ItemContainer>
                            {userStarred.map((rep) => {
                                return <UserRepository rep={rep} key={rep.id} />
                            })}
                        </ItemContainer>
                        <br />
                        <ButtonSection>
                            <ButtonArea />
                        </ButtonSection>
                        <br />
                    </Container>)
                    : <LoadingPage />
            }
        </>
    )
}

export default StarredPage;