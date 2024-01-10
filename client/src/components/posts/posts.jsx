
import Post from './post/post'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { getPost } from "../../features/post/postSlice"
import "./posts.css"




const Posts = () => {
    const dispatch = useDispatch()
    const { memory } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])

    return (
        <div className='posts_container'>
            {memory.length > 0 ?
                <div className='show_posts'>
                    {memory.map((post) => (<div key={post._id} className="post_fram">
                        <Post post={post} />
                    </div>))}
                </div> : <h2 className='noPost'>There is no post</h2>}
        </div>
    )
}

export default Posts
