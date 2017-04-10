import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDvvxo6jTdShfz-1Q_3no-8xI43aLBFQS8';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data);
// });

// Create a new component. This component shoudl produce some HTML

// const is ES6, final value, instead of var
// App = 5 will return an error
// the html is JSX, what looks like html but is Javascript
// JSX converts JS to HTML

// const App = function () {
//     return <div>Hi!</div>;
// }

// new ES6 syntax. Almost same as above but "this" is slightly different.
// const App = () => {
//   return (
//     <div >
//       <SearchBar / >
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('chocolate');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       }); // this.setState({ videos:videos });
    });
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)

// Error -React is not defined
// Javascript Modules, all code we write in separate files cannot reference other files
// Need to explicitly import
// React.render(App);
// -> import React from 'react';

// Error -React.render is depracated. Please use ReactDOM.render from require('react-dom') instead.
// React.render(App);
// -> import ReactDOM from 'react-dom';
// -> ReactDOM.render(App);

// Error -ReactDOM.render(): Invalid component element.
// Currently passing a class instead of an instance
// Need to create instance of the element first. Wrap JSX tags around it.
// ReactDOM.render(App);
// -> ReactDOM.render(<App />);

// Error -Invariant Violation: Target container is not a DOM element.
// Doesn't know where to render it to, put target DOM.
// ReactDOM.render(<App />);
// -> ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render( < App / > , document.querySelector('.container'));
