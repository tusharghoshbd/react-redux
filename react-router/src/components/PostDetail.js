import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const PostDetail = ({match})=>{
    return (
        <div>
            <h1>Hi, This Post -  {match.params.postId}</h1>
            <Link to="/post" > Back</Link>
        </div>
    )
}

export default PostDetail;