import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Post = ()=>{
    return (
        <div>
            <ol>
                <li > <Link  to="post-detail/1" >Post 1</Link>  </li>
                <li> <Link  to="post-detail/2" >Post 2</Link> </li>
                <li><Link  to="post-detail/3" >Post 3</Link> </li>
                <li><Link  to="post-detail/4" >Post 4</Link> </li>
            </ol>
        </div>
    )
}

export default Post;