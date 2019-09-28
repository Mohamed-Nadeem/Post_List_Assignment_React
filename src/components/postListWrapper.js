import React from 'react';
import PostList from './postList';

class PostListWrapper extends React.Component {
  render() {
    return (
      <PostList postList={this.props.items} onClick={(id, direction) => this.props.onClick(id, direction)} />
    )
  }
}

export default PostListWrapper;