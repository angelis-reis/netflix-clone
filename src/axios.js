import axios from "axios";

//  base url to make requests

const instance = axios.create(
    {
        baseURL: "htpps://api.themoviedb.org/3"
    }
);

export default instance;
    