import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './card.scss';

function Card({ userData }) {
    const history = useHistory()

    const { avatar_url, bio, followers, following, location, name, public_repos, login } = userData

    const onClickRepos = () => {
        history.push(`/${login}/repository`)
    }

    const onClickStarred = () => {
        history.push(`/${login}/starred`)
    }

    return userData?.name ? (
        <div id="CardContainer">
            <div>
                <img src={avatar_url} alt={name} />
                <h3>{name}</h3>
                <p>{bio}</p>
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
                <section className="buttonsSection">
                    <Button onClick={onClickRepos}>Repositório</Button>
                    <Button onClick={onClickStarred}>Starred</Button>
                </section>
            </div>
        </div>
    ) : (<Loading />)

}

export default Card;