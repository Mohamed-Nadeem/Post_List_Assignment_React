import React from 'react';
import _ from 'lodash';
import './postLists.css';

const PostList = (props) => {
  const {postList, onClick} = props;
  const UP = -1;
  const DOWN = 1;

  return (
      <ul>
        {_.map(postList, item =>{
          return(
            <li key={item.id} style={{ backgroundColor: item.bgColor }}>
              <div className="postId">{item.id}</div>
              <div className="postTitle">{item.title}</div>
              <div className="postArrows">
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