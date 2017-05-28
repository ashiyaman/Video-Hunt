import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import Video from './components/video';
import VideoList from './components/video_list';



const API_KEY = 'AIzaSyAHPA_NcGDS08McB_a3hMiqVQAb339yUis';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    };

    this.videoSearch('coffee');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="content">
        <SearchBar
          onSearchTermChange = {term => this.videoSearch(term)}
        />
        <Video video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
      );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
