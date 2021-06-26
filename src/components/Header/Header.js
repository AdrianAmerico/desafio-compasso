import React from 'react';
import './header.scss';
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
// import { getUserGit } from '../../requests/getUserGit';

function Header() {
    const { body, onChange, clear } = useForm({ userName: "" })
    const onClickSeach = () => {
        // getUserGit(body.userName);
        clear();
    }
    return (
        <header>
            <div className="seachSection">
                <TextField placeholder="Pesquisar usuários" value={body.userName} name="userName" />
            </div>
        </header>
    )
}
export default Header;