import React from 'react'
import "./post.css"
import { useDispatch } from "react-redux"
import { deletePost, updatePost } from "../../../features/post/postSlice"
import FileBase from "react-file-base64"
import { useState } from 'react'
import moment from 'moment'

const Post = ({ post }) => {
    const dispatch = useDispatch()
    const [btnUpdate, setBtnUpdate] = useState(false)
    const [id, setId] = useState(null)
    const [updatePosts, setUpdatePost] = useState({
        title: '', message: '', tags: '', selectedFile: ''
    })

    return (
        <div className='post_container'>
            <div>
                <div><img src={post.selectedFile} alt="" className='post_img' /></div>
                <i className="fa-sharp fa-solid fa-pencil"></i>
                <h3>{post.creator}</h3>
                <p>{moment(post.createdAt).fromNow()}</p>
                <h3>{post.title}</h3>
                <p>{post.message}</p>
                <p>{post.tags}</p>
                <button className='btn-like'>Like<i className="fa-regular fa-thumbs-up"></i>{post.likeCount}</button>
                <button className='btn-delete' onClick={() => { dispatch(deletePost(post._id)) }}>Delete</button>
                <button onClick={() => {
                    setBtnUpdate(true)
                    setId(post._id)
                }}>Edit</button>
            </div>
            <div>
                {btnUpdate && id === post._id ? (<div className='upde_form'>
                    <form className='forms' onSubmit={() => dispatch(updatePost(post._id, updatePosts))} >
                        <h1>update a memory</h1>
                        <input type="text" name='creator' placeholder='your name....' onChange={(e) => { setUpdatePost({ ...updatePosts, creator: (e.target.value) }) }} />
                        <input type="text" name='title' placeholder='title ....' onChange={(e) => { setUpdatePost({ ...updatePosts, title: (e.target.value) }) }} />
                        <textarea type="text" name='message' placeholder='write your message here' onChange={(e) => { setUpdatePost({ ...updatePosts, message: (e.target.value) }) }} />
                        <input type="text" name='tags' placeholder='tags ...' onChange={(e) => { setUpdatePost({ ...updatePosts, tags: (e.target.value) }) }} />
                        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => { setUpdatePost({ ...updatePosts, selectedFile: base64 }) }} /></div>
                        <button className="btn-create" type='submit' >Update</button>
                    </form></div>) : null}</div>
        </div>
    )
}

export default Post
