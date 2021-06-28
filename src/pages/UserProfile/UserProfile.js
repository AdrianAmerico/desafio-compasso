import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import UserRepository from '../../components/UserRepository/UserRepository';
import { useGetUserRepos } from '../../requests/getUserRepos';
import ButtonArea from '../../components/ButtonArea/ButtonArea';

function UserProfile() {
    const params = useParams()
    const { requestUsers, userRepos } = useGetUserRepos({})

    useEffect(() => {
        requestUsers(params.user)
    }, [])

    return (
        <div>
            <div style={{ overflow: "auto" }}>
                {userRepos.length > 0 ? (
                    userRepos.map((rep) => {
                        return (
                            <UserRepository rep={rep} key={rep.id} />
                        )
                    })
                ) : <Loading style={{ position: "relative" }} />}
            </div>
            <ButtonArea />
        </div>
    )
}
export default UserProfile;