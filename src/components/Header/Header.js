import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useGetUserGit } from '../../requests/getUserGit';
import { GlobalStateContext } from '../../global/GlobalContext';
import { useHistory, useParams } from 'react-router';
import './header.scss';

function Header() {
    const { body, onChange } = useForm({ userName: "" });
    const params = useParams()
    const history = useHistory()
    const { requestUsers } = useContext(GlobalStateContext)
    const onClickSeach = () => {
        history.push(body.userName)
        requestUsers(body.userName);
    }

    return (
        <header>
            <div className="seachSection">
                <h1>Pesquisar Usuários do GitHub</h1>
                <h3>Digite um nome para encontrar usuários e repositórios</h3>
                <form onSubmit={onClickSeach} >
                    <div className="inputArea">
                        <TextField placeholder="Pesquisar usuários" value={body.userName} name="userName" variant="outlined" label="Digite o nome do usuario" style={{ width: "80%" }} color="primary" onChange={onChange} required pattern={"^.{3,}"} />
                        <Button onClick={onClickSeach} variant="outlined" style={{ opacity: '0.5' }} type="button">Pesquisar</Button>
                    </div>
                </form>
            </div>
        </header>
    )
}
export default Header;