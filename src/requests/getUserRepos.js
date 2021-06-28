import { API, BASE_URL } from "../constants/constants";
import { useState } from "react";
import axios from "axios";

export function useGetUserRepos(initialState) {
    const { CLIENT_ID, CLIENT_SECRET, count, sort } = API;
    const [userRepos, setUserRepos] = useState(initialState)

    function requestUsers(user) {
        axios.get(`${BASE_URL}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
            .then((res) => {
                setUserRepos(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return { requestUsers, userRepos };
}