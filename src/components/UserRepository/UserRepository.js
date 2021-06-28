import React from 'react';
import Loading from '../Loading/Loading';
import './userrepository.scss';

function UserRepository({ rep }) {
    const { updated_at, name, language, description, stargazers_count, watchers } = rep
    const date = updated_at.split("T")
    const cutedDate = date[0].split("-").reverse()
    const testF = `${cutedDate[0]}/${cutedDate[1]}/${cutedDate[2]}`;
    return (
        <div>
            <div>
                {rep ? (
                    <article>
                        <div className="repositoryInfo">
                            <div className="repositoryCard-leftSide">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <p>{language}</p>
                                <div>
                                    <span>estrela: {stargazers_count}</span>
                                    <span>visualizacoes: {watchers}</span>
                                    <span>{testF}</span>
                                </div>
                            </div>

                            <div className="repositoryCard-rightSide">
                                <button>{stargazers_count}</button>
                            </div>
                        </div>
                    </article>
                ) : (<Loading />)}
            </div>
        </div>
    )
}
export default UserRepository;