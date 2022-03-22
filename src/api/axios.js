import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "265e7a9adf0eb34abac3ff280110e452",
        language: "ko-KR"
    },
})

export default instance;