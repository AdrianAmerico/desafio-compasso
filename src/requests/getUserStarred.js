import { API, BASE_URL } from "../constants/constants";
import { useState } from "react";
import axios from "axios";

export function useGetUserStarred (initialState) {
    const { CLIENT_ID, CLIENT_SECRET, count, sort } = API;
    const [userStarred, setUserRepos] = useState(initialState)

    function requestStarred(user) {
        axios.get(`${BASE_URL}/${user}/starred?per_page=${count}&sort=${sort}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
            .then((res) => {
                setUserRepos(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return { requestStarred, userStarred };
}