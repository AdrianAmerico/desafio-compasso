import { API, BASE_URL } from "../constants/constants";
import { useState } from "react";
import axios from "axios";

export function useGetUserGit(initialState) {
    const { CLIENT_ID, CLIENT_SECRET } = API;
    const [userData, setUserData] = useState(initialState)

    function requestUsers(user) {
        axios.get(`${BASE_URL}/${user}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
            .then((res) => {
                setUserData(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return { requestUsers, userData };
}