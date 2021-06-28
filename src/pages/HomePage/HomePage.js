import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { GlobalStateContext } from '../../global/GlobalContext';
import './homepage.scss';

function HomePage() {
    const { userData } = useContext(GlobalStateContext)
    useEffect(() => {

    }, [userData])

    return (
        <div id="homepageContainer">
            <Header />
        </div>
    )
}
export default HomePage;