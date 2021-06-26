import React from 'react';
import './header.scss';
import useForm from '../../hooks/useForm';
import { getUserGit } from '../../requests/getUserGit';

function Header() {
    const { body, onChange, clear } = useForm({ userName: "" })
    const onClickSeach = () => {
        getUserGit(body.userName);
        clear();
    }
    return (
        <header>
            <img src="" alt="icone do Github" />
            <div className="seachSection">
                <input placeholder="Pesquisar usuários" onChange={onChange} value={body.userName} name="userName" />
                <button onClick={onClickSeach}>Pesquisar</button>
            </div>
            <img src="" alt="Icone de perfil" />
            <img src="" alt="setinha para logout" />
        </header>
    )
}
export default Header;