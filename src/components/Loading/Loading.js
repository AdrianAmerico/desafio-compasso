import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.scss';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Loading() {
    const history = useHistory()
    return (
        <div id="errorPage">
            <div>
                <h1>Este usuário não tem repositórios salvos</h1>
                <CircularProgress />
                <Button variant="contained" color="primary" onClick={() => history.push("/")}>Voltar</Button>
            </div>
        </div>
    )
}

export default Loading;;