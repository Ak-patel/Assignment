import React from 'react'
import { useSnapshot } from 'valtio'
import { UserPostState } from '../store'

const Posts = () => {
    const { post } = useSnapshot(UserPostState);
    return (
        <div className='container'>
            <h1>Posts</h1>
            <div>
            {Array.from(post).map((e, index) => (
                <p key={index}>{e.body}</p>
            ))}
            </div>
        </div>
    )
}
export default Posts;