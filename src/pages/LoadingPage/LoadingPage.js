import React from 'react'
import { CircularProgress } from '@material-ui/core';
import styles from './loadingPage.module.scss';
function LoadingPage() {
    return (
        <div className={styles.loadingContainer}>
            <CircularProgress size="10rem" />
        </div>
    )
}

export default LoadingPage;