import { API, BASE_URL } from "../constants/constants";
import { useState } from "react";
import axios from "axios";

export function useGetUserRepos(initialState) {
    console.log(initialState)
    const { CLIENT_ID, CLIENT_SECRET, count, sort } = API;
    const [userRepos, setUserRepos] = useState(initialState)

    function requestUsers(body) {
        console.log(body)
        console.log(`${BASE_URL}/${body}/repos?per_page=${count}&sort=${sort}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        axios.get(`${BASE_URL}/${body}/repos?per_page=${count}&sort=${sort}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
            .then((res) => {
                console.log(res.data)
                setUserRepos(res.data)
            })
            .catch((err) => {
                console.log(err)
                // setUserData(err)
            })
    }
    return { requestUsers, userRepos };
}