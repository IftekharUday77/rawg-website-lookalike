import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd01613c7c0ce4b59a05c49c7ec112d27'
    }
})