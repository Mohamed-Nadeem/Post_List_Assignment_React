import React from 'react';
import '../styles/temperFrontEnd.css';
import PostListWrapper from './postListWrapper';

class TemperForntEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        items: props.posts,
      }],
      stepNumber: 0,
      initialIndex: 0,
      newIndex: 0
    };
  }

  handleMove = (id, direction) => {
    const UP = -1;
    const DOWN = 1;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
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
      }]),
      stepNumber: history.length,
    });
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step
    });
  }

  refreshPage = () => {
    window.location.reload();
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves  = history.map((step, move) => {
      const desc = move ?
        'Go to move number ' + move :
        'Go to start';
      return (
        <li  className="timeTravel-button" key={move}>
          <button className="btn btn-primary time-button-class" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    return (
      <div className="temper-main-class">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <span className="labels-col">Sortable List</span>
              <div>
                <PostListWrapper items={current.items} onClick={(id, direction) => this.handleMove(id, direction)}/>
              </div>
            </div>
            <div className="col-sm-4">
              <span className="labels-col">Go to previous step</span>
              <ol id="timeTravelList">
                {moves}
              </ol>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-block" onClick={() => this.refreshPage()}>Refresh</button>
      </div>
    );
  }
}

export default TemperForntEnd;
