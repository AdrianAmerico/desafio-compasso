import React from 'react';

function UserRepository({ rep }) {
    console.log(rep)
    const { updated_at, name, language, description, stargazers_count, watchers } = rep
    console.log("estrelas: " + stargazers_count)
    console.log("visualizacoes: " + watchers)
    return (

        <article>
            <div className="repositoryInfo">
                <p>{name}</p>
                <p>{updated_at}</p>
            </div>
            <p>{description}</p>
            <p>{language}</p>
        </article>
    )
}
export default UserRepository;