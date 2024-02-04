import axios from "axios";

export async function getBlogPost() {
    const _res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return _res;
}

export async function createBlogPost(){
    const _res = await axios.post('https://jsonplaceholder.typicode.com/posts',
    {title:'this is title',body:'this is body',userID: 12}
    );
    return _res;
}