import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalContext';
import { useGetUserRepos } from '../../requests/getUserRepos';
import './card.scss';

function Card({ userData }) {
const history = useHistory()
    useEffect(() => {
    }, [userData])

    const { requestUsers } = useGetUserRepos([])

    console.log(userData)
    const { avatar_url, bio, followers, following, location, name, public_repos, login } = userData
    console.log(avatar_url)

    const onClickRepos = () => {
        console.log("hmm")
        history.push(`/${login}/repository`)
        // requestUsers("AdrianAmerico")
    }

    return userData.name ? (
        <div id="CardContainer" >

            <div>
                <img src={avatar_url} alt="" />
                <p>{name}</p>
                <p>{location}</p>
                <div className="cardInfo">
                    <span>Repositórios</span>
                    <span>{public_repos}</span>
                </div>

                <div className="cardInfo">
                    <span>Seguidores</span>
                    <span>{followers}</span>
                </div>

                <div className="cardInfo">
                    <span>Seguindo</span>
                    <span>{following}</span>
                </div>
                <button onClick={onClickRepos}>Perfil</button>
            </div>

        </div>
    ) : (<p>aaa</p>)

}

export default Card;