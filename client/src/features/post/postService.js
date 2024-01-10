import axios from "axios";

const createPost = async (postData) => {
    const response = await axios.post("http://localhost:3001/posts/", postData)
    return response.data
}

const getPost = async () => {
    const response = await axios.get("http://localhost:3001/posts/")
    return response.data
}

const deletePost = async (id) => {
    return await axios.delete(`http://localhost:3001/posts/delete/${id}`)
}
const updatePost = async (id, postData) => {
    const response = await axios.put(`http://localhost:3001/posts/update/${id}`, postData)
    return response.data
}
const postService = {
    createPost,
    getPost,
    deletePost,
    updatePost
}

export default postService