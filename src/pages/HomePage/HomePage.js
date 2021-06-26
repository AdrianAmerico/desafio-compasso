import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { GlobalStateContext } from '../../global/GlobalContext';
import { getUserGit } from '../../requests/getUserGit';
import './homepage.scss';

function HomePage() {
    const { data, setData } = useContext(GlobalStateContext)
    console.log(data)
    // getUserGit()
    console.log(data)
    return (
        <div id="homepageContainer">
            <Header />
        </div>
    )
}
export default HomePage;