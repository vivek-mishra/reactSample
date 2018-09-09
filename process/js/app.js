let React = require('react');
let ReactDOM = require('react-dom');
let TrackList = require('./TrackList');
let SearchTracks = require('./SearchTracks');
let _ = require('lodash');


class MainInterface extends React.Component {
  constructor() {
    super();
    this.state = {
      orderBy: ['track', 'artist'],
      images: [],
      orderDir: 'asc',
      myTracks: []
    } //return
  } //getInitialState

  componentDidMount() {
    this.fetchData();
  }

  fetchData(trackName) {
      console.log("track-----", trackName);
      let TracksUri = "http://ws.audioscrobbler.com/2.0/";
      let TrackUrl = TracksUri + "?"
          + "method=track.search"
          + "&track="+trackName
          + "&api_key=4345c9ab1d228cff9536a29d5daa0b3f"
          + "&format=json";
      console.log(TrackUrl);

      if(trackName!=null) {
          this.serverRequest = $.get(TrackUrl, function (result) {
              //console.log("result", result.results.trackmatches.track);
              let tempTracks = result.results.trackmatches.track;
              let image = result.results.trackmatches.track.image;
              this.setState({
                  myTracks: tempTracks,
                  images: image
              }); //setState
          }.bind(this));
      }
  }


    searchTrack(trackName, artistName, track) {
        //let term = this.state.trackName;
        console.log("artist--", artistName);
        console.log("song name--", track);
        this.setState({
            term: trackName});
        this.fetchData(trackName);
    }
  render() {
      var filteredTracks = this.state.myTracks;
      let orderBy = this.state.orderBy;
      var orderDir = this.state.orderDir;

      filteredTracks = _.orderBy(filteredTracks, function(item) {
          return item[orderBy[0]];
      }, orderDir);//orderBy


    filteredTracks = filteredTracks.map((item, index) => {
        //console.log(item.image);
        return(
          <TrackList key={index} singleItem={item} image={item.image} />
      ) //return
    }); //filteredTracks.map

    return (
      <div className="interface">
          <SearchTracks searchTrack = {this.searchTrack.bind(this)} />
        <ul className="item-list media-list">{filteredTracks}</ul>

      </div>
    ) //return


  }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
  //render
} //MainInterface



ReactDOM.render(
  <MainInterface />,
  document.getElementById('musicTracks')
); //render
