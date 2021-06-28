import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonArea from '../../components/ButtonArea/ButtonArea';
import Loading from '../../components/Loading/Loading';
import UserRepository from '../../components/UserRepository/UserRepository';
import { useGetUserStarred } from '../../requests/getUserStarred';
import './starredpage.scss';

function StarredPage() {
    document.title = "Favoritos";
    const params = useParams()
    const { requestStarred, userStarred } = useGetUserStarred()
    useEffect(() => {
        requestStarred(params.user)
    }, [])

    return (
        <div id="StarredContainer">
            {userStarred && userStarred.length !== 0 ? (
                userStarred.map((rep) => {
                    return <UserRepository rep={rep} key={rep.id} />
                })) : <Loading />}
            <br />
            <section className="buttonSection">
                <ButtonArea />
            </section>

        </div>
    )
}
export default StarredPage;