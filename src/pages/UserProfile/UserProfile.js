import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserRepository from '../../components/UserRepository/UserRepository';
import { GlobalStateContext } from '../../global/GlobalContext';
import { useGetUserRepos } from '../../requests/getUserRepos';

function UserProfile() {
    const params = useParams()
    const { requestUsers, userRepos } = useGetUserRepos({})
    const { userData } = useContext(GlobalStateContext)
    console.log(userData)
    // requestUsers(params.user)
    useEffect(() => {
        requestUsers(params.user)
    }, [])

    return (
        <div>
            {userRepos.length > 0 ? (
                userRepos.map((rep) => {
                    console.log(rep)
                    return (
                        <UserRepository rep={rep} key={rep.id}/>
                    )
                })
            ) : <p>Carregando</p>}
        </div>
    )
}
export default UserProfile;