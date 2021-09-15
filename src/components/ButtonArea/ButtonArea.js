import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './buttonarea.scss';

function ButtonArea(props) {
    const history = useHistory()
    return (
        <div className="button">
            <Button variant="outlined" style={{ opacity: '0.5' }} onClick={() => history.goBack()} type="button">{props.text}</Button>
        </div>
    )
}

ButtonArea.defaultProps = {
    text: "Voltar"
}

export default ButtonArea;