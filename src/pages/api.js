import axios from "axios";

const BASE_API = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout:3000,
    headers:{},
});

export async function getBlogPost() {
    const _res = await BASE_API.get("/posts/1");
    return _res;
}

export async function createBlogPost(){
    const _res = await BASE_API.post('/posts',
    {title:'this is title',body:'this is body',userID: 12}
    );
    return _res;
}

export async function deleteBlogPost(){
    const _res = await BASE_API.delete('/posts/1');
    return _res;
}