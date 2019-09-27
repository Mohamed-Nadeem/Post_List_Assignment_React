import React from 'react';
import PostListWrapper from './postListWrapper';

class TemperForntEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        items: [
          {'id': 1, 'title': 'Post 1', 'bgColor': '#f9cb9c'},
          {'id': 2, 'title': 'Post 2','bgColor' : '#fee599'},
          {'id': 3, 'title': 'Post 3', 'bgColor': '#e06666'},
          {'id': 4, 'title': 'Post 4', 'bgColor' : '#b6d7a7'}
        ],
      }]
    };
  }

  handleMove = (id, direction) => {
    const UP = -1;
    const DOWN = 1;
    const history = this.state.history;
    const current = history[history.length - 1];
    const items = current.items.slice();

    const position = items.findIndex((i) => i.id === id);
    if (position < 0) {
      alert("Given item not found.");
    } else if (direction === UP && position === 0 || direction === DOWN && position === items.length - 1) {
      return
    }

    const item = items[position]
    const newItems = items.filter((i) => i.id !== id)
    newItems.splice(position + direction, 0, item)

    this.setState({history: history.concat([{
        items: newItems,
      }])
    })
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    
    return (
      <div>
        <div>
          <PostListWrapper items={current.items} onClick={(id, direction) => this.handleMove(id, direction)}/>
        </div>
        <div>
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    );
  }
}

export default TemperForntEnd;
