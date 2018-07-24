import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = '';//Enter your Youtube API key

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo: null
        };

        this.searchYTVideo('surfboards');
    }
    
    searchYTVideo(term){
        YTSearch({ key: YT_API_KEY, term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render(){
        const ytSearch = _.debounce((term) => this.searchYTVideo(term), 300);
        return <div>
            <SearchBar onSearchTermChange={ ytSearch }/>
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={ this.state.videos } 
            />
        </div>
    }
    
};

ReactDOM.render(<App />, document.querySelector('.container'));