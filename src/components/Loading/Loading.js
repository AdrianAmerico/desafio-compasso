import React from 'react';
import styles from './loading.module.scss';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
function Loading() {
    return (
        <div className={styles.root}>
            <div>
                <h2>Usuário não encontrado</h2>
                <h3>Verifique se o nome inserido é um usuário Github válido.</h3>
            </div>

            <SentimentVeryDissatisfiedIcon style={{ fontSize: 100 }} />
        </div>
    )
}

export default Loading;;