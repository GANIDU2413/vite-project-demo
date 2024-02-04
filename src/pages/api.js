import axios from "axios";

export async function getBlogPost() {
    const _res = await axios.get("https://jsonplaceholder.typicode.com/posts/18949");
    return _res;
}