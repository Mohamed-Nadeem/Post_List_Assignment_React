import React, { Component } from 'react';
import { render } from 'react-dom';
import getPosts from './services/getPosts'
import './styles/index.css';
import TemperForntEnd from './components/temperFrontEnd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: true
    };
  }

  async componentDidMount() {
    const reducedPosts = [];
    try {
    await getPosts().then((data) => {
      data.forEach(post => {
        if (reducedPosts.length < 5) {
          reducedPosts.push(post);
        }
        });
        this.setState({
          isLoaded: false,
          posts: reducedPosts
        })
     });
    } catch(e) {
      alert(e);
    }
  }

  render() {
    return (
      <div>
        <div class="jumbotron text-center react-logo">
          <h1 className="main-title">Temper Frontend Assessment</h1>
        </div>
        {this.state.isLoaded === false && <div><TemperForntEnd posts={this.state.posts} /></div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
