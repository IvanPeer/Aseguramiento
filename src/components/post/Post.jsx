import React, { useState } from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler =()=> {
    setLike(isliked ? like+1 : like+1)
    setIsLiked(!isliked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg'
                 src={Users.filter((u) => u.id === post.userId)[0].profilePicture} 
                alt="" />
                <span className="postUsername">
                  {Users.filter((u) => u.id === post.userId)[0].username}
                  </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
          
          <h4>Descripción: </h4>
          <span className="postText"> {post.desc}</span>
        </div>
        <div className="postCenter">
        <table className='post'>
            <tr>
            <th>Equipo</th>
            <th>Modelo</th>
            <th>Contacto</th>
            <th>Fecha Solicitada</th>
            </tr>
            <tr>
            <th>{post.equipment}</th>
            <th>{post.model}</th>
            <th>{post.contact}</th>
            <th>{post.dateservices}</th>
            </tr>
          </table>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} técnicos</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">Estado: {post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
