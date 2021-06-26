import { API, BASE_URL } from "../constants/constants";
import axios from "axios";
import { useState } from "react";

export async function useGetUserGit(body) {
    console.log(body)
    const [userData, setUserData] = useState([])
    const { CLIENT_ID, CLIENT_SECRET } = API;
    const getUsers = await axios.get(`${BASE_URL}/${body}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        .then((res) => {
            console.log(res.data)
            setUserData(res.data)
        })
        .catch((err) => {
            console.log(err)
            // setUserData(err)
        })
    return [userData, getUsers];
}

