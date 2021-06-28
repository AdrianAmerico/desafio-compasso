import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './buttonarea.scss';

function ButtonArea() {
    const history = useHistory()
    return (
        <div className="button">
            <Button variant="contained" color="primary" onClick={() => history.goBack()}>Voltar</Button>
        </div>
    )
}
export default ButtonArea;