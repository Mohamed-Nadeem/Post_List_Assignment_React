import React from 'react';
import _ from 'lodash';
import '../styles/postLists.css';

const PostList = (props) => {
  const {postList, onClick} = props;
  const UP = -1;
  const DOWN = 1;

  return (
      <ul className="list-group">
        {_.map(postList, item =>{
          return(
            <li key={item.id} className="list-group-item post-lists-li">
              <div className="postId">{item.id}</div>
              <div className="postTitle">{item.title}</div>
              <div className="badge">
                  <a onClick={() => onClick(item.id, UP)}>&#x25B2;</a>
                  <a onClick={() => onClick(item.id, DOWN)}>&#x25BC;</a>
              </div>
            </li>
          )
        })}
      </ul>
  );
}

export default PostList;