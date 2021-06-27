import { API, BASE_URL } from "../constants/constants";
import { useState } from "react";
import axios from "axios";

export function useGetUserGit(initialState) {
    console.log(initialState)
    const { CLIENT_ID, CLIENT_SECRET } = API;
    const [userData, setUserData] = useState(initialState)

    function requestUsers(user) {
        console.log(user)
        axios.get(`${BASE_URL}/${user}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
            .then((res) => {
                console.log(res.data)
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
                // setUserData(err)
            })
    }
    return { requestUsers, userData };
}