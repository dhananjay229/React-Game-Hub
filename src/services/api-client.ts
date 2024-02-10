import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '867bed6f352d42e39418534f676ef8ac'
    }
})